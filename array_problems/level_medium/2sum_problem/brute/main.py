def two_sum(arr: list, target: int):
    # Get the length of the array
    n = len(arr)
    # Iterate through each element in the array
    for i in range(n):
        # Iterate through the elements after the current element
        for k in range(i + 1, n):
            # Check if the sum of the two elements equals the target
            if arr[i] + arr[k] == target:
                # Return the indices of the two elements
                return [i, k]


if __name__ == "__main__":
    # Define the array and the target sum
    arr = [2, 6, 5, 8, 11]
    target = 14
    # Call the two_sum function and store the result
    result = two_sum(arr, target)  # (1, 3)
    # Print the result
    print(*result)
