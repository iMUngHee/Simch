"""
    Set up your Engine Config
"""


from core import Crawl
from nltk_downloads import downloader


if __name__ == '__main__':
    BASE_URL = 'http://localhost:3000/posts'

    downloader()
    Crawl(BASE_URL).work()
