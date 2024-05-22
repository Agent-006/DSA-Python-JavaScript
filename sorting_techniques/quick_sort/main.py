def get_pivot(arr: list, low: int, high: int):
    pivot = arr[low]
    i: int = low
    k: int = high
    while i < k:
        while arr[i] <= pivot and i <= high - 1:
            i += 1

        while arr[k] > pivot and k >= low + 1:
            k -= 1
        if i < k:
            temp = arr[i]
            arr[i] = arr[k]
            arr[k] = temp
    temp = arr[low]
    arr[low] = arr[k]
    arr[k] = temp

    return k


def quick_sort(arr: list, low: int, high: int):
    if low < high:
        partition: int = get_pivot(arr, low, high)
        print(partition)
        quick_sort(arr, low, partition - 1)
        quick_sort(arr, partition + 1, high)
    return arr


if __name__ == "__main__":
    arr = list(
        map(int, input("Enter the array elements, separate them with spaces: ").split())
    )
    n: int = len(arr)
    result = quick_sort(arr, low=0, high=(n - 1))
    print(arr)
