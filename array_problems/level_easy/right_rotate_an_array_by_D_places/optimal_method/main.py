def reverse(arr: list, start: int, end: int):
    while start <= end:
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start += 1
        end -= 1


def rotateright(arr: list, n: int, k: int):
    # Reverse last k elements
    reverse(arr, n - k, n - 1)
    # Reverse first n-k elements
    reverse(arr, 0, n - k - 1)
    # Reverse whole array
    reverse(arr, 0, n - 1)


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    k = int(input("Enter the value of k: "))
    n = len(arr)
    print(*arr)
    rotateright(arr, n, k)
    print(*arr)
