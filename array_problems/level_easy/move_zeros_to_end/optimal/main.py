def move_zero_to_end(arr, n):
    k = -1

    for i in range(n):
        if arr[i] == 0:
            k = i
            break

    for i in range(k + 1, n):
        if arr[i] != 0:
            temp = arr[i]
            arr[i] = arr[k]
            arr[k] = temp
            k += 1


if __name__ == "__main__":
    arr = list(map(int, input("Enter the array elements: ").split()))
    n = len(arr)
    print(*arr)
    move_zero_to_end(arr, n)
    print(*arr)
