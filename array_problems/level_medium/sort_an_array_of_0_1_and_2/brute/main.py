# sort using merge sort
# Time Complexity: O(n log n)
# Space Complexity: O(n)


# merge algo
def merge(arr: list, low: int, mid: int, high: int):
    # [low...mid]
    # [mid+1...high]
    left: int = low
    right: int = mid + 1
    temp: list = []

    # checking if the left pointer exceeds the mid and right pointer exceeds high
    while left <= mid and right <= high:
        # checking which value is smaller
        if arr[left] <= arr[right]:
            temp.append(arr[left])
            left += 1
        else:
            temp.append(arr[right])
            right += 1

    # if the right array exceeds the all the elements left in the 'left' array are added to the temp.
    while left <= mid:
        temp.append(arr[left])
        left += 1

    # if the left array exceeds the all the elements right in the 'right' array are added to the temp.
    while right <= high:
        temp.append(arr[right])
        right += 1

    # changing the elements of the original array in a sorted order.
    for i in range(low, high + 1):
        # print(f"i={i}, low={low}, high={high}")
        arr[i] = temp[i - low]
        # print(f"{arr} {temp}")


# merge_sort algorithm
def merge_sort(arr: list, low: int, high: int):
    if low >= high:
        return
    mid: int = (low + high) // 2
    merge_sort(arr, low, mid)
    merge_sort(arr, mid + 1, high)
    merge(arr, low, mid, high)


if __name__ == "__main__":
    arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
    n = len(arr)
    merge_sort(arr, 0, n - 1)
    print(arr)  # Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
