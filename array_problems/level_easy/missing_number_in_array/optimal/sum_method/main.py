def missing_number(arr, n):
    sum_natural = int((n * (n + 1)) / 2)
    array_sum = 0
    for i in arr:
        array_sum += i
    return sum_natural - array_sum

if __name__ == '__main__':
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
    n = 10
    print(missing_number(arr, n))