def longest_subarray(arr, n, num):
    max_len = (
        0  # variable to store the maximum length of subarray with sum equal to 'num'
    )
    for i in range(n):  # iterate through each element in the array
        sum = 0  # variable to store the sum of elements in the subarray
        for j in range(i, n):  # iterate through the elements starting from index 'i'
            sum += arr[j]  # add the current element to the sum
            if sum == num:  # if the sum is equal to 'num'
                max_len = max(
                    max_len, j - i + 1
                )  # update the maximum length if necessary
    return max_len  # return the maximum length of subarray


arr = [1, 2, 3, 4, 5, 6, 7, 8]  # input array
n = len(arr)  # length of the array
num = 15  # target sum
print(
    longest_subarray(arr, n, num)
)  # print the result, which is the maximum length of subarray with sum equal to 'num' (5)
