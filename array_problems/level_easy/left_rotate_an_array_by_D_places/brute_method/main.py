def leftRotate(arr: list, n: int, d: int):
    d = d % n

    temp = [d]

    # extract 'd' elements and put them to temp
    for i in range(d):
        temp.append(arr[i])

    # shifting the 'arr' elements
    for i in range(d, n):
        arr[i - d] = arr[i]

    # putting back the 'temp' elements to last of 'arr'
    for i in range(n - d, n):
        arr[i] = temp[i - (n - d)]

    return arr


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    d = int(input("Enter the value of d: "))
    n = len(arr)
    print(*arr)
    result = leftRotate(arr, n, d)
    print(*result)
