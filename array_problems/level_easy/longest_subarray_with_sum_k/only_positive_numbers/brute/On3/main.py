def longest_subarray(arr: list, n: int, num: int):
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


arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3]
n = len(arr)
num = 3
print(
    longest_subarray(arr, n, num)
)  # Print the maximum length of subarray with sum 'num' (expected output: 3)
