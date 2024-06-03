def right_rotate(arr: list, n: int, k: int):
    k = k % n
    temp = []

    # extract the 'k' elements from 'arr'
    for i in range(n - k, n):
        temp.append(arr[i])

    # right shift all the elements by 'k'
    for i in range(n - k - 1, -1, -1):
        arr[i + k] = arr[i]

    # putting the elements of 'temp' into 'arr'
    for i in range(k):
        arr[i] = temp[i]

    return arr


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    d = int(input("Enter the value of d: "))
    n = len(arr)
    print(*arr)
    result = right_rotate(arr, n, d)
    print(*result)
