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

import operator  # Dict 연산
import requests  # Connect Network
import nltk  # 자연어 처리
import json  # Python Object <-> str
import re  # Regex

from .repo import Repository  # 파일 저장 및 읽기
from .config import *  # 사용자 개인 설정
from .utils import printer  # 콘솔 출력


class Crawl:
    """
        크롤링
        1. 블로그 전체 포스트 링크 크롤링
        2. 블로그 포스트 크롤링
    """
    @printer('Crawling')
    def __init__(self, base_url):
        self.repo = Repository.instance()
        self.base_url = base_url
        self.links = []

    def work(self):
        """
            크롤링 파이프라인
        """
        self.get_links()
        self.crawling()

    @printer('Get Links')
    def get_links(self):
        """
            1. 블로그 전체 포스트 링크 크롤링
        """
        root = requests.get(self.base_url)
        soup = bs(root.text, 'lxml')
        self.links = get_links(soup)  # 사용자 정의 패턴 사용
        print(f'Get {len(self.links)} Links!')

    @printer('Get Posts')
    def crawling(self):
        """
            2. 블로그 포스트 크롤링
        """
        count = 0
        for link in self.links:
            count += 1
            print(f'=>\t{count} / {len(self.links)}')

            target = parse.quote(link.get_text())
            page = requests.get(f'{self.base_url}/{target}')
            soup = bs(page.text, 'lxml')

            # 캐싱
            self.repo.save(
                # 사용자 정의 패턴 사용
                f'data/raw/{get_title(soup)}', get_content(soup)
            )


class Index:
    """
        인덱싱
        1. 캐시 로드
        2. 토크나이징
        3. 클리닝
        4. 스테밍
        5. 불용어 제거
        6. BoW(Bag of Words) 생성 및 캐싱
        7. TF-IDF 행렬 생성 및 캐싱
        8. LF 행렬 생성 및 캐싱
    """

    def __init__(self):
        self.repo = Repository.instance()
        self.file_list = [f for f in listdir('data/raw')
                          if isfile(join('data/raw', f))]

    # 쿼리 전처리
    @classmethod
    def preprocess(self, query):
        tokens = self.tokenization(query)
        tokens = self.cleaning(tokens)
        tokens = self.stemming(tokens)
        return self.stopword(tokens)

    @printer('Indexing')
    def work(self):
        """
            크롤링 파이프라인
        """
        count = 0
        # 1. 캐시 로드
        for file in self.file_list:
            # 진행 상황
            count += 1
            print(f'=>\t{count} / {len(self.file_list)}')

            # 캐시(크롤링 결과 파일) 로드
            content = self.repo.load(f'data/raw/{file}')
            tokens = self.tokenization(content)
            tokens = self.cleaning(tokens)
            tokens = self.stemming(tokens)
            tokens = self.stopword(tokens)
            result = self.integer_encoding(tokens)

            # 캐시(BoW(Bag of Words)) 저장
            self.repo.save(f'data/index/{file}', json.dumps(result))
        self.tf_idf()
        self.latent_factor()

    @classmethod
    def tokenization(self, text):
        """
            2. 토크나이징
        """
        return nltk.word_tokenize(text)

    @classmethod
    def cleaning(self, tokens):
        """
            3. 클리닝
        """
        not_char = re.compile(r'\W|\d')
        result = []
        for word in tokens:
            if not not_char.match(word) and len(word) > 1 and not len(word) > 10:
                result.append(word)
        return result

    @classmethod
    def stemming(self, tokens):
        """
            4. 스테밍
        """
        stemmer = nltk.PorterStemmer()
        return [stemmer.stem(word) for word in tokens]

    @classmethod
    def stopword(self, tokens):
        """
            5. 불용어 제거
        """
        stop_words = set(nltk.corpus.stopwords.words('english'))
        result = []
        for word in tokens:
            if word not in stop_words:
                result.append(word)
        return result

    @classmethod
    def integer_encoding(self, tokens):
        """
            6. BoW(Bag of Words) 생성 및 캐싱
        """
        return nltk.FreqDist(tokens).most_common(100)

    @printer('TF-IDF')
    def tf_idf(self):
        """
            7. TF-IDF 행렬 생성 및 캐싱
        """
        count = 0
        text = []
        for file in self.file_list:
            # 진행 상황
            count += 1
            print(f'=>\t{count} / {len(self.file_list)}')

            # ! Read File
            # 캐시(BoW(Bag of Words)) 로드
            text.append(
                ' '.join(
                    [word[0] for word in json.loads(
                        self.repo.load(f'data/index/{file}'))]
                )
            )

        # TF-IDF 행렬 생성
        tfidf = TfidfVectorizer(stop_words='english',
                                smooth_idf=True).fit(text)
        dtm = tfidf.transform(text).toarray()

        # 캐싱
        self.repo.save('data/cache/tfidf_meta', payload=json.dumps(dtm.shape))
        dtm.tofile('data/cache/tfidf')
        self.repo.save('data/cache/vocab', json.dumps(tfidf.vocabulary_))

    @printer('Latent-Factor')
    def latent_factor(self):
        """
            8. LF 행렬 생성 및 캐싱
        """
        # 캐시(TF-IDF 행렬) 로드
        print('1.\tLoad Cache')
        shape = json.loads(self.repo.load('data/cache/tfidf_meta'))
        dtm = np.fromfile('data/cache/tfidf').reshape((shape[0], shape[1]))

        # SVD 계산
        print('2.\tCalculate SVD')
        [U, S, VT] = scipy.linalg.svd(dtm, full_matrices=False)
        sum_a = sum([n ** 2 for n in S])
        energy = sum_a
        K = 0
        for sig in S[::-1]:
            if energy - sig ** 2 < sum_a * 0.85:
                break
            K += 1
            energy -= sig ** 2

        # LF 계산
        print('3.\tFind Latent-Factor')
        U_tr, S_tr, VT_tr = scipy.sparse.linalg.svds(
            dtm, k=(dtm.shape[0] - K))
        matrix_tr = np.dot(np.dot(U_tr, np.diag(S_tr)), VT_tr)

        # 결과 캐싱
        print('4.\tSave Cache')
        self.repo.save('data/cache/matrix_tr_meta',
                       payload=json.dumps(matrix_tr.shape))
        matrix_tr.tofile('data/cache/matrix_tr')


class Search:
    """
        검색
        * Naive: 문서 당 키워드 등장 횟수 카운팅
        * TF-IDF: 문서 당 키워드 TF-IDF 값 합산
        * Latent-Factor: 키워드 간 숨겨진 관계 계산
        * K-Means: 문서 간 군집화 후, 군집 당 상위 키워드 10개 계산

        ! 출력: [(문서 이름, 점수), ...]
    """

    def __init__(self):
        self.repo = Repository.instance()
        self.file_list = [f for f in listdir('data/index')
                          if isfile(join('data/index', f))]

    def naive(self, query):
        """
            키워드 등장 횟수 카운팅
        """
        slugs = []
        for file in self.file_list:
            # ! Read File
            # 캐시(BoW(Bag of Words)) 로드
            content = json.loads(self.repo.load(f'data/index/{file}'))

            # 등장 횟수 카운팅
            count = 0
            for token in content:
                if token[0] in query:
                    count += 1

            if count:
                slugs.append((file, count))

        return slugs

    def tf_idf(self, query):
        """
            TF-IDF 점수 합산
        """
        slugs = []

        # 캐시(TF-IDF 행렬) 로드
        shape = json.loads(self.repo.load('data/cache/tfidf_meta'))
        dtm = np.fromfile('data/cache/tfidf').reshape((shape[0], shape[1]))
        vocab = json.loads(self.repo.load('data/cache/vocab'))

        # 키워드 저장
        targets = []
        for token in query:
            if token in vocab:
                targets.append(vocab[token])

        # TF-IDF 합산
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

        # TF-IDF 키워드 로드
        vocab = json.loads(self.repo.load('data/cache/vocab'))
        vocab2list = list(vocab)

        # 쿼리 토큰 중 등장 키워드 필터링
        col_index = []
        for token in query:
            if token in vocab:
                index = vocab2list.index(token)
                if index > -1:
                    col_index.append(index)

        # LF 결과 로드
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

        # 캐시(TF-IDF 행렬) 로드
        shape = json.loads(self.repo.load('data/cache/tfidf_meta'))
        dtm = np.fromfile('data/cache/tfidf').reshape((shape[0], shape[1]))
        vocab = json.loads(self.repo.load('data/cache/vocab'))

        # 키워드 인덱스 정리
        sorted_col = sorted(vocab.items(),
                            key=operator.itemgetter(1), reverse=False)
        cols = [i[0] for i in sorted_col]

        # 데이터 프레임 생성
        df = pd.DataFrame(dtm, index=self.file_list, columns=cols)
        # 쿼리 TF-IDF
        q_tfidf = TfidfVectorizer(stop_words='english',
                                  smooth_idf=True).fit([' '.join(query)])
        q_dtm = q_tfidf.transform([' '.join(query)]).toarray()

        # 쿼리 키워드 인덱스 정리
        q_sorted_col = sorted(q_tfidf.vocabulary_.items(),
                              key=operator.itemgetter(1), reverse=False)
        q_cols = [i[0] for i in q_sorted_col]

        # 쿼리 데이터 프레임 생성
        q_df = pd.DataFrame(q_dtm, index=['query'], columns=q_cols)

        # 쿼리가 포함된 데이터 프레임
        df = pd.concat([df, q_df]).fillna(0)

        # 표준화
        scaler = StandardScaler()
        std = scaler.fit_transform(df)

        # PCA
        pca = PCA(n_components=25).fit_transform(std)

        # K-Means
        kmeans = KMeans(n_clusters=20, random_state=0)
        result = kmeans.fit_predict(pca)
        arr = np.ndarray.tolist(result)

        # 쿼리가 속한 클러스터
        target = arr[result.shape[0] - 1]

        # 해당 클러스타 센트로이드와 가까운 상위 10개 목록
        d = kmeans.transform(pca)[:, target]
        ind = np.argsort(d)[::-1][:10]

        # 클래스 출력 형태로 변형
        score = 10
        for i in ind:
            slugs.append((self.file_list[i], score))
            score -= 1

        return slugs


class Rank:
    """
        랭킹
        -> 점수 정렬 후 출력
    """

    def __init__(self, slugs):
        self.slugs = slugs

    def work(self):
        return [pair[0] for pair in sorted(
            self.slugs, key=lambda slug: slug[1], reverse=True)[:10]]
