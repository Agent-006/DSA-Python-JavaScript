import os

def majority_element_greater_than_n_by_2(arr: list, n: int) -> int:
    hash_map = {}

    # Iterate through each element in the array
    for i in range(n):
        # If the element is not in the hash map, add it
        if arr[i] not in hash_map:
            hash_map[arr[i]] = 1
        # If the element is in the hash map, increment the count
        else:
            hash_map[arr[i]] += 1

    # Iterate through the hash map
    for key, value in hash_map.items():
        # If the count is greater than half the size of the array, return the element
        if value > n // 2:
            return key

    # If no majority element is found, return -1
    return -1


if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(current_dir, "input.txt")

    with open(input_file, "r") as file:
        content = file.read().strip()
        arr = list(map(int, content.split()))
        n = len(arr)

    result = majority_element_greater_than_n_by_2(arr, n)
    print(f"majority_element_greater_than_n_by_2 : {result}")  # Output: 2
