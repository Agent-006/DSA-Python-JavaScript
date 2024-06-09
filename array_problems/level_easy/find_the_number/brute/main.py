def find_number_appear_once(arr, n):
    for i in range(n):
        num = arr[i]
        count = 0
        for k in range(n):
            if num == arr[k]:
                count += 1
        if count == 1:
            return num

arr = [1, 1, 2, 2, 3, 4, 4, 5, 5]
n = len(arr)
print(find_number_appear_once(arr, n))  # 3