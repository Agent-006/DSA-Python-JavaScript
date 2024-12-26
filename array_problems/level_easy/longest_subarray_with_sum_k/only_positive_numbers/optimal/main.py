def longestSubarrayWithSumK(arr, k):
    # Get the length of the array
    n = len(arr)

    # Initialize variables
    left = 0  # Pointer for the left end of the subarray
    right = 0  # Pointer for the right end of the subarray
    max_len = 0  # Variable to store the maximum length of subarray with sum k
    sum = arr[0]  # Variable to store the current sum of elements in the subarray

    # Iterate through the array
    while right < n:

        # Move the left pointer to the right until the sum is greater than k
        while sum > k and left <= right:
            sum -= arr[left]
            left += 1

        # Check if the sum is equal to k
        if sum == k:
            # Update the maximum length if the current subarray is longer
            max_len = max(max_len, right - left + 1)

        # Move the right pointer to the right
        right += 1

        # Update the sum by adding the next element to the subarray
        if right < n:
            sum += arr[right]

    # Return the maximum length of subarray with sum k
    return max_len


arr = [1, 2, 3, 1, 1, 1, 1, 3, 3]
k = 6
print(longestSubarrayWithSumK(arr, k))  # Output: 4
