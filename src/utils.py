def printer(step):
    def decorator(function):
        def wrapper(*args, **kwargs):
            print(f'--------- *** {step} *** ---------')
            result = function(*args, **kwargs)
            print()
            return result
        return wrapper
    return decorator


def jaccard_similarity(list1, list2):
    intersection = len(list(set(list1).intersection(list2)))
    union = (len(set(list1)) + len(set(list2))) - intersection
    if union == 0:
        return 0
    return float(intersection) / union
