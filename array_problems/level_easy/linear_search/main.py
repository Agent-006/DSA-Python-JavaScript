def linear_search(arr, n):
    for i in range(len(arr)):
        if arr[i] == n:
            return i
    return -1


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements separated by space: ").split()))
    n = int(input("Enter the number to search: "))
    result = linear_search(arr, n)
    print(result)
