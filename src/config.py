"""
    Set up for your blog!
"""

import json
from bs4 import BeautifulSoup, ResultSet


def get_links(soup: BeautifulSoup) -> ResultSet:
    """
        Set your own links pattern
    """
    return soup.find_all('h4', {'role': 'title'})


def get_title(soup: BeautifulSoup) -> str:
    """
        Set your own title pattern
    """
    return soup.title.get_text().replace(' - UNG', '')


def get_content(soup: BeautifulSoup) -> str:
    """
        Set your own content pattern
    """
    return json.loads(soup.find('script', {'id': '__NEXT_DATA__'}).get_text())[
        'props']['pageProps']['content']
