def remove_duplicates(arr: list, n: int):
    i = 0

    for k in range(n):
        if arr[i] != arr[k]:
            arr[i + 1] = arr[k]
            i += 1
    return i + 1


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    length = len(arr)
    result = remove_duplicates(arr, length)
    print(result)
