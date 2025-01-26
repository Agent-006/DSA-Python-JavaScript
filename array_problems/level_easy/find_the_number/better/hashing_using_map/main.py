def find_number_appear_once(arr: list, n: int):
    hash_map = {}  # Create an empty dictionary to store the count of each element

    for i in range(n):  # Iterate through the array
        if arr[i] in hash_map:  # If the element is already present in the dictionary
            hash_map[arr[i]] += 1  # Increment its count by 1
        else:  # If the element is not present in the dictionary
            hash_map[arr[i]] = 1  # Add it to the dictionary with a count of 1

    for key, value in hash_map.items():  # Iterate through the dictionary
        if value == 1:  # If the count of an element is 1
            return key  # Return that element

arr = [1, 1, 2, 2, 3, 4, 4, 5, 5]
n = len(arr)
print(find_number_appear_once(arr, n))  # Print the element that appears only once