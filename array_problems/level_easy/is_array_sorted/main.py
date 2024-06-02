def array_is_sorted(arr: list, n: int):
    for i in range(1, n):
        if arr[i] >= arr[i - 1]:
            continue
        else:
            return False
    return True


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    length = len(arr)

    result = array_is_sorted(arr, length)
    print(result)
