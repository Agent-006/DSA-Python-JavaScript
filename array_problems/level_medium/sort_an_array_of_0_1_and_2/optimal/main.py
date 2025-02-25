# Dutch National Flag Algorithm
# Time Complexity: O(n)
# Space Complexity: O(1)


def sort_0s_1s_2s(arr: list, n: int) -> list:
    low = 0  # Pointer for the next position of 0
    mid = 0  # Pointer for the current element
    high = n - 1  # Pointer for the next position of 2

    # Traverse the array until mid pointer exceeds high pointer
    while mid <= high:
        if arr[mid] == 0:
            # Swap the current element with the element at low pointer
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1  # Increment low pointer
            mid += 1  # Increment mid pointer
        elif arr[mid] == 1:
            mid += 1  # Move to the next element
        else:
            # Swap the current element with the element at high pointer
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1  # Decrement high pointer

    return arr


if __name__ == "__main__":
    arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
    n = len(arr)
    sorted_arr = sort_0s_1s_2s(arr, n)
    print(sorted_arr)  # Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]