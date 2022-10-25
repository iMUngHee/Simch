def printer(step):
    def decorator(function):
        def wrapper(*args, **kwargs):
            print(f'--------- *** {step} *** ---------')
            result = function(*args, **kwargs)
            print()
            return result
        return wrapper
    return decorator
