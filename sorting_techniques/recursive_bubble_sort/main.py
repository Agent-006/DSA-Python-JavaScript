def bubble_sort(arr: list, n):
    # base case
    if n == 1:
        return

    for i in range(n - 1):
        if arr[i] > arr[i + 1]:
            temp = arr[i + 1]
            arr[i + 1] = arr[i]
            arr[i] = temp

    # range reduced after recursion:
    bubble_sort(arr, n - 1)


if __name__ == "__main__":
    arr = list(
        map(int, input("Enter the array elements, separate with spaces: ").split())
    )
    n: int = len(arr)
    print("Before sorting: ", *arr)
    bubble_sort(arr, n)
    print("After sorting: ", *arr)
