def majority_element_greater_than_n_by_2(arr: list, n: int) -> int:
    # Iterate through each element in the array
    for i in range(n):
        count = 0
        # Count the occurrences of the current element
        for k in range(n):
            if arr[i] == arr[k]:
                count += 1
        # If the count is greater than half the size of the array, return the element
        if count > n // 2:
            return arr[i]
    # If no majority element is found, return -1
    return -1

if __name__ == "__main__":
    arr = [2, 2, 3, 3, 1, 2, 2]
    n = len(arr)
    result = majority_element_greater_than_n_by_2(arr, n)
    print(f"majority_element_greater_than_n_by_2(arr, n) : {result}")  # Output: 2
