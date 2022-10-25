# from utils.cur import cur_decomposition
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
from bs4 import BeautifulSoup as bs
from os.path import isfile, join
from os import listdir
from urllib import parse
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
import pandas as pd
import numpy as np
import re
import nltk
import json
import scipy
import requests
import operator
from typing import Tuple

if __name__ == "__main__":
    # nltk.download('wordnet')
    # nltk.download('punkt')
    # nltk.download('omw-1.4')
    # nltk.download('stopwords')

    # # *** Crawling ***
    root = requests.get('http://localhost:3000/posts')
    root_soup = bs(root.text, 'lxml')
    links = root_soup.find_all('h4', {'role': 'title'})

    print('--------Crawling----------')
    for link in links:
        print(f'Read Link: {link.get_text()}')
        target = parse.quote(link.get_text())
        page = requests.get(f'http://localhost:3000/posts/{target}')
        soup = bs(page.text, 'lxml')
        title = soup.title.get_text().replace(' - UNG', '')
        content = json.loads(soup.find('script', {'id': '__NEXT_DATA__'}).get_text())[
            'props']['pageProps']['content']

        print(f'Write File: {title}')
        with open(f'data/raw/{title}.txt', 'w', encoding='utf8') as f:
            f.write(content)
        print()

    print()

    # *** Indexing ***
    print('--------Indexing----------')
    file_list = [f for f in listdir('data/raw')
                 if isfile(join('data/raw', f))]
    for file in file_list:
        # ! Read File
        content = None
        print(f'Read File: {file}')
        with open(f'data/temp/raw/{file}', 'r', encoding='utf8') as f:
            content = f.read()

        # ! Tokenization
        tokens = nltk.word_tokenize(content)

        # ! Cleaning
        not_char = re.compile(r'\W|\d')
        result = []
        for word in tokens:
            if not not_char.match(word) and len(word) > 1 and not len(word) > 10:
                result.append(word)

        tokens = result

        # ! Stemming
        stemmer = nltk.PorterStemmer()
        tokens = [stemmer.stem(word) for word in tokens]

        # ! Lemmatization
        lemmatizer = nltk.WordNetLemmatizer()
        tokens = [lemmatizer.lemmatize(word) for word in tokens]

        # ! Stopword
        stop_words = set(nltk.corpus.stopwords.words('english'))
        result = []
        for word in tokens:
            if word not in stop_words:
                result.append(word)

        tokens = result

        # ! Integer Encoding
        vocab = nltk.FreqDist(tokens)

        # ! Write File
        print(f'Write File: {file}')
        with open(f'data/index/{file}', 'w', encoding='utf8') as f:
            f.write(json.dumps(vocab.most_common(100)))
        print()
    print()

    # *** Search ***
    print('--------Searching----------')
    QUERY = 'is react good?'
    # QUERY = 'is rust better than react?'
    # QUERY = 'react'
    # QUERY = 'rust'
    # QUERY = 'unghee'
    # QUERY = 'What is list in python?'
    # QUERY = 'How to use python list?'
    # QUERY = 'python'
    # QUERY = 'graphql'
    # QUERY = 'SPC'
    print(f'Query: {QUERY}')
    # ! Tokenization
    tokens = nltk.word_tokenize(QUERY)

    # ! Cleaning
    not_char = re.compile(r'\W|\d')
    result = []
    for word in tokens:
        if not not_char.match(word) and len(word) > 1 and not len(word) > 10:
            result.append(word)
    tokens = result

    # ! Stemming
    stemmer = nltk.PorterStemmer()
    tokens = [stemmer.stem(word) for word in tokens]

    # ! Lemmatization
    lemmatizer = nltk.WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(word) for word in tokens]

    # ! Stopword
    stop_words = set(nltk.corpus.stopwords.words('english'))
    result = []
    for word in tokens:
        if word not in stop_words:
            result.append(word)
    tokens = result

    # ? 1. Naive
    print('*** Naive ***')
    slugs = []
    file_list = [f for f in listdir('data/temp/index')
                 if isfile(join('data/temp/index', f))]
    for file in file_list:
        # ! Read File
        content = None
        print(f'Read File: {file}')
        with open(f'data/temp/index/{file}', 'r', encoding='utf8') as f:
            content = f.read()
            content = json.loads(content)

        count = 0
        for token in content:
            if token[0] in tokens:
                count += 1

        if count:
            slugs.append((file.replace('.txt', ''), count))
    result_1 = [pair[0] for pair in sorted(
        slugs, key=lambda slug: slug[1], reverse=True)[:10]]
    # print(result_1)
    print()

    # ? 2. TF-IDF
    print('*** TF-IDF ***')
    slugs = []
    file_list = [f for f in listdir('data/temp/raw')
                 if isfile(join('data/temp/raw', f))]

    text = []
    for file in file_list:
        # ! Read File
        content = None
        print(f'Read File: {file}')
        with open(f'data/raw/{file}', 'r', encoding='utf8') as f:
            content = f.read()
        text.append(content)
    tfidf = TfidfVectorizer(stop_words='english', smooth_idf=True).fit(text)
    dtm = tfidf.transform(text).toarray()
    vocab = tfidf.vocabulary_

    targets = []
    for token in tokens:
        if token in vocab:
            targets.append(vocab[token])

    for index in range(len(file_list)):
        score = 0
        for i in targets:
            if dtm[index][i] > 0:
                score += dtm[index][i]
        if score:
            slugs.append((file_list[index].replace('.txt', ''), score))

    result_2 = [pair[0] for pair in sorted(
        slugs, key=lambda slug: slug[1], reverse=True)[:10]]
    # print(result_2)
    print()

    # ? 3. Latent-Factor
    print('*** Latent-Factor ***')
    # * DTM
    file_list = [f for f in listdir('data/temp/index')
                 if isfile(join('data/temp/index', f))]
    data_frames = []
    for file in file_list:
        # ! Read File
        content = None
        print(f'Read File: {file}')
        with open(f'data/temp/index/{file}', 'r', encoding='utf8') as f:
            content = f.read()
            content = json.loads(content)
        v_keys = []
        v_vals = []
        for word in content:
            v_keys.append(word[0])
            v_vals.append(word[1])
        V = pd.DataFrame(data=[v_vals], columns=v_keys,
                         index=[file.replace('.txt', '')])
        data_frames.append(V)
    M = pd.concat(data_frames, sort=False)
    M = M.fillna(0)

    [U, S, VT] = scipy.linalg.svd(dtm, full_matrices=False)

    sum_a = sum([n ** 2 for n in S])
    energy = sum_a
    K = 0
    for sig in S[::-1]:
        if energy - sig ** 2 < sum_a * 0.8:
            print(sum_a)
            print(energy)
            break
        K += 1
        energy -= sig ** 2

    U_tr, S_tr, VT_tr = scipy.sparse.linalg.svds(
        dtm, k=(M.shape[0] - K))
    matrix_tr = np.dot(np.dot(U_tr, np.diag(S_tr)), VT_tr)

    col_index = []
    for token in tokens:
        if token in M.columns:
            index = M.columns.get_loc(token)
            if index > -1:
                col_index.append(index)

    app_list = []
    for i in range(M.shape[0]):
        score = 0
        for index in col_index:
            score += matrix_tr[i][index]
        app_list.append((i, score))

    # app_list = []
    # for index in col_index:
    #     temp_list = []
    #     for i in range(M.shape[0]):
    #         temp_list.append((i, matrix_tr[i][index]))
    #     app_list.append(temp_list)

    # sorted_app_list = []
    # for li in app_list:
    #     sorted_app_list.append([pair[0] for pair in sorted(
    #         li, key=lambda l: l[1], reverse=True)[:10]])
    # print(sorted_app_list)
    # final = list(set([y for x in sorted_app_list for y in x]))

    final = sorted(app_list, key=lambda slug: slug[1], reverse=True)[:10]
    result_3 = []
    names = M.index
    for index, _ in final:
        result_3.append(names[index])
    # print(result_3)
    print()

    # # ? 4. CUR-Decomposition
    # print('*** Latent-Factor ***')
    # # * DTM
    # file_list = [f for f in listdir('data/temp/index')
    #              if isfile(join('data/temp/index', f))]
    # data_frames = []
    # for file in file_list:
    #     # ! Read File
    #     content = None
    #     print(f'Read File: {file}')
    #     with open(f'data/temp/index/{file}', 'r', encoding='utf8') as f:
    #         content = f.read()
    #         content = json.loads(content)
    #     v_keys = []
    #     v_vals = []
    #     for word in content:
    #         v_keys.append(word[0])
    #         v_vals.append(word[1])
    #     V = pd.DataFrame(data=[v_vals], columns=v_keys,
    #                      index=[file.replace('.txt', '')])
    #     data_frames.append(V)
    # M = pd.concat(data_frames, sort=False)
    # M = M.fillna(0)

    # col_index = []
    # for token in tokens:
    #     index = M.columns.get_loc(token)
    #     if index > -1:
    #         col_index.append(index)
    # r = np.linalg.matrix_rank(M.to_numpy())
    # [C, U, R] = cur_decomposition(M.to_numpy(), r)
    # print(C)
    # print(U)
    # print(R)
    # print(C.shape)
    # print(U.shape)
    # print(R.shape)
    # matrix_tr = np.dot(np.dot(C, U), R)
    # print(matrix_tr)

    # app_list = []
    # for i in range(M.shape[0]):
    #     score = 0
    #     for index in col_index:
    #         score += matrix_tr[i][index]
    #     app_list.append((i, score))

    # # app_list = []
    # # for index in col_index:
    # #     temp_list = []
    # #     for i in range(M.shape[0]):
    # #         temp_list.append((i, matrix_tr[i][index]))
    # #     app_list.append(temp_list)

    # # sorted_app_list = []
    # # for li in app_list:
    # #     sorted_app_list.append([pair[0] for pair in sorted(
    # #         li, key=lambda l: l[1], reverse=True)[:10]])
    # # print(sorted_app_list)
    # # final = list(set([y for x in sorted_app_list for y in x]))

    # final = sorted(app_list, key=lambda slug: slug[1], reverse=True)[:10]
    # result_4 = []
    # names = M.index
    # for index, _ in final:
    #     result_4.append(names[index])
    # # print(result_4)
    # print()

    # ? 4. Clustering
    slugs = []
    file_list = [f for f in listdir('data/temp/index')
                 if isfile(join('data/temp/index', f))]

    slug_list = [f.replace('.txt', '') for f in file_list]

    text = []
    for file in file_list:
        # ! Read File
        content = None
        print(f'Read File: {file}')
        with open(f'data/temp/index/{file}', 'r', encoding='utf8') as f:
            content = f.read()
            content = [pair[0] for pair in json.loads(content)[:5]]
            content = ' '.join(content)
        text.append(content)
    tfidf_vectorizer = TfidfVectorizer(stop_words='english', smooth_idf=True)
    tfidf = tfidf_vectorizer.fit_transform(text)
    tfidf = TfidfVectorizer(stop_words='english', smooth_idf=True).fit(text)
    dtm = tfidf.transform(text).toarray()
    sorted_col = sorted(tfidf.vocabulary_.items(),
                        key=operator.itemgetter(1), reverse=False)
    cols = [i[0] for i in sorted_col]
    print(len(cols))

    df = pd.DataFrame(dtm, index=slug_list, columns=cols)

    q_tfidf = TfidfVectorizer(stop_words='english',
                              smooth_idf=True).fit([' '.join(tokens)])
    q_dtm = q_tfidf.transform([' '.join(tokens)]).toarray()
    print(q_dtm.shape)
    q_sorted_col = sorted(q_tfidf.vocabulary_.items(),
                          key=operator.itemgetter(1), reverse=False)
    q_cols = [i[0] for i in q_sorted_col]
    print(len(cols))

    e_df = pd.DataFrame(columns=cols)
    q_df = pd.DataFrame(q_dtm, index=['query'], columns=q_cols)
    df = pd.concat([df, q_df]).fillna(0)
    print(df.shape)
    print(df)
    # s_df.to_csv('test.csv')

    scaler = StandardScaler()
    std = scaler.fit_transform(df)
    print(std.shape)
    print(std)

    pca = PCA(n_components=25).fit_transform(std)
    # print(pca.shape)
    # apca = PCA(n_components=df.shape[0])
    # pca = PCA()
    # apca.fit(std)
    # print(sum(apca.explained_variance_ratio_))

    # print(apca.explained_variance_ratio_)
    # plt.figure(figsize=(10, 1930))
    # plt.plot(range(0, df.shape[0]), apca.explained_variance_ratio_.cumsum(),
    #          'ro--')
    # plt.show()
    # print(apca.shape)

    # sum_of_sd = []
    # K = range(1, 50)
    # for k in K:
    #     km = KMeans(n_clusters=k)
    #     km = km.fit(pca)
    #     sum_of_sd.append(km.inertia_)
    # plt.plot(K, sum_of_sd, 'bo--')
    # plt.xlabel('k')
    # plt.ylabel('Sum_of_squared_distances')
    # plt.title('Elbow Method For Optimal k')
    # plt.show()

    # q_tfidf = TfidfVectorizer(stop_words='english',
    #                           smooth_idf=True).fit([' '.join(tokens)])
    # q_dtm = q_tfidf.transform([' '.join(tokens)]).toarray()
    # print(q_dtm.shape)
    # q_sorted_col = sorted(q_tfidf.vocabulary_.items(),
    #                       key=operator.itemgetter(1), reverse=False)
    # q_cols = [i[0] for i in q_sorted_col]
    # print(len(cols))

    # e_df = pd.DataFrame(columns=cols)
    # q_df = pd.DataFrame(q_dtm, index=['query'], columns=q_cols)
    # s_df = pd.concat([e_df, q_df]).fillna(0)
    # print(s_df.shape)
    # print(s_df)
    # s_df.to_csv('test.csv')

    # scaler = StandardScaler()
    # q_std = scaler.fit_transform(s_df)
    # print(q_std.shape)
    # print(q_std)

    # q_pca = PCA(n_components=25).fit_transform(s_df)
    # print(q_pca.shape)

    kmeans = KMeans(n_clusters=20, random_state=0)
    result = kmeans.fit_predict(pca)
    print(result.shape)
    print(result)
    arr = np.ndarray.tolist(result)
    target = arr[result.shape[0] - 1]

    d = kmeans.transform(pca)[:, target]
    ind = np.argsort(d)[::-1][:10]
    print(ind)

    for i in ind:
        slugs.append(slug_list[i])
    print(slugs)
    # for i in range(result.shape[0] - 2):
    #     if arr[i] == target:
    #         slugs.append(slug_list[i])
    # print(slugs)
    result_4 = slugs
    # target = result[221]
    # target = kmeans.predict(s_df)

    # print(pca)
    # print('------------------------------------------')
    # print(pca[kmeans.labels_ == target])

    # *** Rank ***

    def jaccard_similarity(list1, list2):
        intersection = len(list(set(list1).intersection(list2)))
        union = (len(set(list1)) + len(set(list2))) - intersection
        if union == 0:
            return 0
        return float(intersection) / union

    print(f'Query: {QUERY}\n')
    # print(
    #     f'length: \n\t1: {len(result_1)}\n\t2: {len(result_2)}\n\t3: {len(result_3)}\n')
    print(
        f'length: \n\t1: {len(result_1)}\n\t2: {len(result_2)}\n\t3: {len(result_3)}\n\t4: {len(result_4)}\n')
    print(f'1. Naive: {result_1}\n')
    print(f'2. TF-IDF: {result_2}\n')
    print(f'3. Latent-Factor: {result_3}\n')
    print(f'4. K-Means: {result_4}\n')
    print()
    print(f'1, 2: {jaccard_similarity(result_1, result_2)}')
    print(f'1, 3: {jaccard_similarity(result_1, result_3)}')
    print(f'1, 4: {jaccard_similarity(result_1, result_4)}')
    print(f'2, 3: {jaccard_similarity(result_2, result_3)}')
    print(f'2, 4: {jaccard_similarity(result_2, result_4)}')
    print(f'3, 4: {jaccard_similarity(result_3, result_4)}')
