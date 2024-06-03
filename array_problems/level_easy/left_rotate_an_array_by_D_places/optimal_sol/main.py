def reverse(arr, start, end):
    while start <= end:
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start += 1
        end -= 1


# function to rotate the d elements to left
def left_rotate(arr, n, d):
    # Reverse first d elements
    reverse(arr, 0, d - 1)
    # Reverse last n-d elements
    reverse(arr, d, n - 1)
    # Reverse whole array
    reverse(arr, 0, n - 1)


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    d = int(input("Enter the value of d: "))
    n = len(arr)
    print(*arr)
    result = left_rotate(arr, n, d)
    print(*result)
