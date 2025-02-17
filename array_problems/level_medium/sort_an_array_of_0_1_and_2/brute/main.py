def sort_0s_1s_2s(arr: list, n: int):
    # Initialize counters for 0s, 1s, and 2s
    count_0 = 0
    count_1 = 0
    count_2 = 0
    
    # Count the number of 0s, 1s, and 2s in the array
    for i in range(n):
        if arr[i] == 0:
            count_0 += 1
        elif arr[i] == 1:
            count_1 += 1
        else:
            count_2 += 1
    
    # Place the 0s in the beginning of the array
    for i in range(count_0):
        arr[i] = 0
    
    # Place the 1s after the 0s
    for i in range(count_0, count_0 + count_1):
        arr[i] = 1
    
    # Place the 2s after the 1s
    for i in range(count_0 + count_1, n):
        arr[i] = 2
    
    return arr

if __name__ == '__main__':
    arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]
    n = len(arr)
    # Print the sorted array
    print(sort_0s_1s_2s(arr, n))  # Output: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2]