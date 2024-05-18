def selection_sort(arr, n):
    for i in range(n):
        min = i
        for k in range(n):
            if arr[k] > arr[min]:
                temp = arr[k]
                arr[k] = arr[min]
                arr[min] = temp

    return arr


n = int(input())
arr = list(map(int, input().split()))

sorted_arr = selection_sort(arr, n)
print(*arr)