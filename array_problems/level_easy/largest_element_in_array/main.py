def largest_element(arr, n):
    largest = 0
    for i in range(n):
        if arr[i] > largest:
            largest = arr[i]
    return largest


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    n = len(arr)

    result = largest_element(arr, n)
    print(result)