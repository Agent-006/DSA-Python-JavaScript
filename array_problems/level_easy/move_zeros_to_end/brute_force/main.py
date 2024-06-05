def move_zero_to_end(arr, n):
    temp = []

    # extract all non-zero elements
    for i in range(n):
        if arr[i] != 0:
            temp.append(arr[i])
    # put all non-zero elements to the front of arr
    for i in range(len(temp)):
        arr[i] = temp[i]

    # setting the remaining elements to zero
    non_zero = len(temp)
    for i in range(non_zero, n):
        arr[i] = 0


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    n = len(arr)
    print(*arr)
    move_zero_to_end(arr, n)
    print(*arr)
