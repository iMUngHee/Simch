from os.path import isfile, join
from os import listdir

from bs4 import BeautifulSoup as bs
from urllib import parse

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans

import pandas as pd
import numpy as np
import scipy
import operator

import requests
import nltk
import json
import re

from .repo import Repository
from .config import *
from .utils import printer


class Crawl:
    @printer('Crawling')
    def __init__(self, base_url):
        self.repo = Repository.instance()
        self.base_url = base_url
        self.links = []

    def work(self):
        self.get_links()
        self.crawling()

    @printer('Get Links')
    def get_links(self):
        root = requests.get(self.base_url)
        soup = bs(root.text, 'lxml')
        self.links = get_links(soup)
        print(f'Get {len(self.links)} Links!')

    @printer('Get Posts')
    def crawling(self):
        count = 0
        for link in self.links:
            count += 1
            print(f'=>\t{count} / {len(self.links)}')

            target = parse.quote(link.get_text())
            page = requests.get(f'{self.base_url}/{target}')
            soup = bs(page.text, 'lxml')

            self.repo.save(
                f'data/raw/{get_title(soup)}', get_content(soup)
            )


class Index:
    def __init__(self):
        self.repo = Repository.instance()
        self.file_list = [f for f in listdir('data/raw')
                          if isfile(join('data/raw', f))]

    @classmethod
    def preprocess(self, query):
        tokens = self.tokenization(query)
        tokens = self.cleaning(tokens)
        tokens = self.stemming(tokens)
        return self.stopword(tokens)

    @printer('Indexing')
    def work(self):
        count = 0
        for file in self.file_list:
            count += 1
            print(f'=>\t{count} / {len(self.file_list)}')

            content = self.repo.load(f'data/raw/{file}')
            tokens = self.tokenization(content)
            tokens = self.cleaning(tokens)
            tokens = self.stemming(tokens)
            tokens = self.stopword(tokens)
            result = self.integer_encoding(tokens)
            self.repo.save(f'data/index/{file}', json.dumps(result))
        self.tf_idf()
        self.latent_factor()

    @classmethod
    def tokenization(self, text):
        return nltk.word_tokenize(text)

    @classmethod
    def cleaning(self, tokens):
        not_char = re.compile(r'\W|\d')
        result = []
        for word in tokens:
            if not not_char.match(word) and len(word) > 1 and not len(word) > 10:
                result.append(word)
        return result

    @classmethod
    def stemming(self, tokens):
        stemmer = nltk.PorterStemmer()
        return [stemmer.stem(word) for word in tokens]

    @classmethod
    def stopword(self, tokens):
        stop_words = set(nltk.corpus.stopwords.words('english'))
        result = []
        for word in tokens:
            if word not in stop_words:
                result.append(word)
        return result

    @classmethod
    def integer_encoding(self, tokens):
        return nltk.FreqDist(tokens).most_common(100)

    @printer('TF-IDF')
    def tf_idf(self):
        count = 0
        text = []
        for file in self.file_list:
            count += 1
            print(f'=>\t{count} / {len(self.file_list)}')
            # ! Read File
            text.append(
                ' '.join(
                    [word[0] for word in json.loads(
                        self.repo.load(f'data/index/{file}'))]
                )
            )
        tfidf = TfidfVectorizer(stop_words='english',
                                smooth_idf=True).fit(text)
        dtm = tfidf.transform(text).toarray()
        self.repo.save('data/cache/tfidf_meta', payload=json.dumps(dtm.shape))
        dtm.tofile('data/cache/tfidf')
        self.repo.save('data/cache/vocab', json.dumps(tfidf.vocabulary_))

    @printer('Latent-Factor')
    def latent_factor(self):
        print('1.\tLoad Cache')
        shape = json.loads(self.repo.load('data/cache/tfidf_meta'))
        dtm = np.fromfile('data/cache/tfidf').reshape((shape[0], shape[1]))

        print('2.\tCalculate SVDs')
        [U, S, VT] = scipy.linalg.svd(dtm, full_matrices=False)
        sum_a = sum([n ** 2 for n in S])
        energy = sum_a
        K = 0
        for sig in S[::-1]:
            if energy - sig ** 2 < sum_a * 0.85:
                break
            K += 1
            energy -= sig ** 2

        print('3.\tFind Latent-Factor')
        U_tr, S_tr, VT_tr = scipy.sparse.linalg.svds(
            dtm, k=(dtm.shape[0] - K))
        matrix_tr = np.dot(np.dot(U_tr, np.diag(S_tr)), VT_tr)

        print('4.\tSave Cache')
        self.repo.save('data/cache/matrix_tr_meta',
                       payload=json.dumps(matrix_tr.shape))
        matrix_tr.tofile('data/cache/matrix_tr')


class Search:
    def __init__(self):
        self.repo = Repository.instance()
        self.file_list = [f for f in listdir('data/index')
                          if isfile(join('data/index', f))]

    def naive(self, query):
        slugs = []
        for file in self.file_list:
            # ! Read File
            content = json.loads(self.repo.load(f'data/index/{file}'))

            count = 0
            for token in content:
                if token[0] in query:
                    count += 1

            if count:
                slugs.append((file, count))

        return slugs

    def tf_idf(self, query):
        slugs = []
        shape = json.loads(self.repo.load('data/cache/tfidf_meta'))
        dtm = np.fromfile('data/cache/tfidf').reshape((shape[0], shape[1]))
        vocab = json.loads(self.repo.load('data/cache/vocab'))

        targets = []
        for token in query:
            if token in vocab:
                targets.append(vocab[token])

        for index in range(len(self.file_list)):
            score = 0
            for i in targets:
                if dtm[index][i] > 0:
                    score += dtm[index][i]
            if score:
                slugs.append(
                    (self.file_list[index], score))

        return slugs

    def latent_factor(self, query):
        slugs = []

        vocab = json.loads(self.repo.load('data/cache/vocab'))
        vocab2list = list(vocab)

        col_index = []
        for token in query:
            if token in vocab:
                index = vocab2list.index(token)
                if index > -1:
                    col_index.append(index)

        shape = json.loads(self.repo.load('data/cache/matrix_tr_meta'))
        matrix_tr = np.fromfile(
            'data/cache/matrix_tr').reshape((shape[0], shape[1]))
        for i in range(shape[0]):
            score = 0
            for index in col_index:
                score += matrix_tr[i][index]
            if score > 0:
                slugs.append((self.file_list[i], score))

        return slugs

    def k_means(self, query):
        slugs = []

        shape = json.loads(self.repo.load('data/cache/tfidf_meta'))
        dtm = np.fromfile('data/cache/tfidf').reshape((shape[0], shape[1]))
        vocab = json.loads(self.repo.load('data/cache/vocab'))

        sorted_col = sorted(vocab.items(),
                            key=operator.itemgetter(1), reverse=False)
        cols = [i[0] for i in sorted_col]

        df = pd.DataFrame(dtm, index=self.file_list, columns=cols)
        q_tfidf = TfidfVectorizer(stop_words='english',
                                  smooth_idf=True).fit([' '.join(query)])
        q_dtm = q_tfidf.transform([' '.join(query)]).toarray()

        q_sorted_col = sorted(q_tfidf.vocabulary_.items(),
                              key=operator.itemgetter(1), reverse=False)
        q_cols = [i[0] for i in q_sorted_col]

        q_df = pd.DataFrame(q_dtm, index=['query'], columns=q_cols)
        df = pd.concat([df, q_df]).fillna(0)

        scaler = StandardScaler()
        std = scaler.fit_transform(df)
        pca = PCA(n_components=25).fit_transform(std)

        kmeans = KMeans(n_clusters=20, random_state=0)
        result = kmeans.fit_predict(pca)
        arr = np.ndarray.tolist(result)
        target = arr[result.shape[0] - 1]
        d = kmeans.transform(pca)[:, target]
        ind = np.argsort(d)[::-1][:10]

        score = 10
        for i in ind:
            slugs.append((self.file_list[i], score))
            score -= 1

        return slugs


class Rank:
    def __init__(self, slugs):
        self.slugs = slugs

    def work(self):
        return [pair[0] for pair in sorted(
            self.slugs, key=lambda slug: slug[1], reverse=True)[:10]]
