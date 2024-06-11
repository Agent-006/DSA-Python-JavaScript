def longest_subarray(arr, k):
    n = len(arr)
    hash_map = {}
    max_len = 0
    prefix_sum = 0

    for i in range(n):
        prefix_sum += arr[i]

        if prefix_sum == k:
            max_len = max(max_len, i + 1)

        rem_ele = prefix_sum - k

        if rem_ele in hash_map:
            length = i - hash_map[rem_ele]
            max_len = max(max_len, length)

        if prefix_sum not in hash_map:
            hash_map[prefix_sum] = i

    return max_len


arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3]
k = 3
print(longest_subarray(arr, k))  # 5
