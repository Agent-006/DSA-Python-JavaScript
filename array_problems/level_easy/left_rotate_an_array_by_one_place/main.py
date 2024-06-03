def left_rotate_by_one(arr, n):
    temp = arr[0]

    for i in range(1, n):
        arr[i - 1] = arr[i]

    arr[n - 1] = temp


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    n = len(arr)
    print(*arr)
    left_rotate_by_one(arr, n)
    print(*arr)
