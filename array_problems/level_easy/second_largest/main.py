def second_largest(arr, n):
    largest = arr[0]
    s_largest = -1

    for i in range(n):
        print("i", i)
        if arr[i] > largest:
            s_largest = largest
            largest = arr[i]
        elif arr[i] < largest and arr[i] > s_largest and arr[i] != largest:
            s_largest = arr[i]
    return s_largest


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    n = len(arr)

    result = second_largest(arr, n)
    print(result)
