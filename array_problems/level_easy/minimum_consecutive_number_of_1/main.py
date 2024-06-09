def find_max_consecutive_ones(nums):
    max_ones = 0
    current_ones = 0
    for num in nums:
        if num == 1:
            current_ones += 1
            max_ones = max(max_ones, current_ones)
        else:
            current_ones = 0
    return max_ones


if __name__ == "__main__":
    arr = [1, 1, 0, 1, 1, 1, 0, 1, 1]
    print(find_max_consecutive_ones(arr))  # 3
