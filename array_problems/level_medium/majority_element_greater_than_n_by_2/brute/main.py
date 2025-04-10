import os


def majority_element_greater_than_n_by_2(arr: list, n: int) -> int:
    # Iterate through each element in the array
    for i in range(n):
        count = 0
        # Count the occurrences of the current element
        for k in range(n):
            if arr[i] == arr[k]:
                count += 1
        # If the count is greater than half the size of the array, return the element
        if count > n // 2:
            return arr[i]
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
    print(f"majority_element_greater_than_n_by_2(arr, n) : {result}")  # Output: 2
