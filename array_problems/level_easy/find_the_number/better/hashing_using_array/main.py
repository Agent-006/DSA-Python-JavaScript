def find_number_appear_once(arr, n):
    # Step 1: Find the maximum element in the array
    maxi = 0
    for i in range(n):
        if arr[i] > maxi:
            maxi = arr[i]

    # Step 2: Create a hash array with size equal to the maximum element + 1
    hash_array = [0] * (maxi + 1)

    # Step 3: Count the frequency of each element in the array
    for i in range(n):
        hash_array[arr[i]] += 1

    # Step 4: Find the element that appears only once
    for i in range(n):
        if hash_array[arr[i]] == 1:
            return arr[i]


arr = [1, 1, 2, 2, 3, 4, 4, 5, 5]
n = len(arr)
print(find_number_appear_once(arr, n))  # 3
