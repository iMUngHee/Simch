from nltk import download
from utils import printer


@printer('NLTK Downloader')
def downloader():
    download('wordnet')
    download('punkt')
    download('omw-1.4')
    download('stopwords')
