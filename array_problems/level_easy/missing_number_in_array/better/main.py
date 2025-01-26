# using hashing
def missing_number(arr: list, n: int):
    hash = [0] * (n + 1)
    
    for i in range(n - 1):
        hash[arr[i]] = 1
        print(arr[i], hash[arr[i]])

    for i in range(1, len(hash)):
        if hash[i] == 0:
            return i


if __name__ == "__main__":
    arr = [1, 2, 4, 5]
    n = 5
    print(missing_number(arr, n))
