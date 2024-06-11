def longest_subarray(arr, n, num):
    max_len = 0  # Initialize the maximum length of subarray with sum 'num' to 0
    for i in range(n):
        for j in range(i, n):
            sum = 0  # Initialize the sum of elements in the subarray to 0
            for k in range(i, j + 1):
                sum += arr[k]  # Calculate the sum of elements in the subarray
            if sum == num:
                max_len = max(
                    max_len, j - i + 1
                )  # Update the maximum length if a subarray with sum 'num' is found
    return max_len


arr = [1, 2, 3, 4, 5, 6, 7, 8]
n = len(arr)
num = 15
print(
    longest_subarray(arr, n, num)
)  # Print the maximum length of subarray with sum 'num' (expected output: 5)
