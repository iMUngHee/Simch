from core import Index, Search, Rank


def search(query, algorithm):
    tokens = Index.preprocess(query)
    slugs = Search().naive(tokens)
    return Rank(slugs).work()
