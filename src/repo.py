from singleton import SingletonInstance


class Repository(SingletonInstance):
    def save(self, path, payload):
        with open(path, 'w', encoding='utf8') as f:
            f.write(payload)

    def load(self, path):
        data = ''
        with open(path, 'r', encoding='utf8') as f:
            data = f.read()
        return data
