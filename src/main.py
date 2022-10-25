from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core import Index, Search, Rank

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def search(query: str = '', algorithm: str = 'TF-IDF'):
    tokens = Index.preprocess(query)
    slugs = None
    if algorithm == 'LF':
        slugs = Search().latent_factor(tokens)
    if algorithm == 'NAIVE':
        slugs = Search().naive(tokens)
    if algorithm == 'TF-IDF':
        slugs = Search().tf_idf(tokens)
    if algorithm == 'K-MEANS':
        slugs = Search().k_means(tokens)

    return {'slugs': Rank(slugs).work()}
