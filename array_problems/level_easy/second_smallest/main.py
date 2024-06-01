def second_smallest(arr, n):
    smallest = arr[0]
    s_smallest = 1000000000

    for i in range(n):
        if arr[i] < smallest:
            s_smallest = smallest
            smallest = arr[i]
        elif arr[i] != smallest and arr[i] < s_smallest:
            s_smallest = arr[i]
    return s_smallest

if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    n = len(arr)

    result = second_smallest(arr, n)
    print(result)

