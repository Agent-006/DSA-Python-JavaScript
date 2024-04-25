def bubble_sort(arr, n):
    for i in range(n - 1):
        swap = 0
        for k in range(n - 1 - i):
            if arr[k] > arr[k + 1]:
                temp = arr[k]
                arr[k] = arr[k + 1]
                arr[k + 1] = temp
                swap = 1
        if swap == 0:
            break

    return arr


n = int(input())
arr = list(map(int, input().split()))

sorted_arr = bubble_sort(arr, n)
print(*arr)
