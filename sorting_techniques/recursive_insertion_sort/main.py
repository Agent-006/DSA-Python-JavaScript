def insertion_sort(arr: list, i: int, n: int):
    # base case
    if i == n:
        return

    k: int = i
    while k > 0 and arr[k - 1] > arr[k]:
        temp = arr[k - 1]
        arr[k - 1] = arr[k]
        arr[k] = temp
        k -= 1

    insertion_sort(arr, i + 1, n)


if __name__ == "__main__":
    arr = list(
        map(int, input("Enter the array elements, separate with spaces: ").split())
    )
    n: int = len(arr)
    print("Before sorting:", *arr)
    insertion_sort(arr, 0, n)
    print("After sorting:", *arr)
