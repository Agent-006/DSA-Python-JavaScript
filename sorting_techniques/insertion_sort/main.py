def insertion_sort(arr, n):
    for i in range(n):
        k = i
        while k > 0 and arr[k - 1] > arr[k]:
            temp = arr[k - 1]
            arr[k - 1] = arr[k]
            arr[k] = temp
            k -= 1
    
    return arr

n = int(input())
arr = list(map(int, input().split()))

sorted_arr = insertion_sort(arr, n)
print(*arr)