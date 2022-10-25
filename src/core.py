import requests
from bs4 import BeautifulSoup as bs
from urllib import parse

from repo import Repository
from config import *


class Crawl:
    def __init__(self, base_url):
        print('--------- *** Crawling *** ---------')
        self.repo = Repository.instance()
        self.base_url = base_url
        self.links = []
        print()

    def work(self):
        self.get_links()
        self.crawling()

    def get_links(self):
        print('--------- *** Get Links *** ---------')
        root = requests.get(self.base_url)
        soup = bs(root.text, 'lxml')
        self.links = get_links(soup)
        print()

    def crawling(self):
        print('--------- *** Get Posts *** ---------')
        for link in self.links:
            target = parse.quote(link.get_text())
            page = requests.get(f'{self.base_url}/{target}')
            soup = bs(page.text, 'lxml')

            self.repo.save(
                f'data/raw/{get_title(soup)}.txt', get_content(soup)
            )
        print()
