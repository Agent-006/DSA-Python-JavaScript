# 2-Sum Problem
def two_sum(arr: list, target: int):
    hash_map = {}  # Dictionary to store the elements and their indices
    n = len(arr)  # Length of the input array

    for i in range(n):
        element = arr[i]
        required_number = (
            target - element
        )  # Calculate the number needed to reach the target

        if required_number in hash_map:
            return [i, hash_map[required_number]]  # Return indices if the pair is found
        hash_map[arr[i]] = i  # Store the element and its index in the dictionary
    return 0  # Return 0 if no pair is found


if __name__ == "__main__":
    arr = [2, 6, 5, 8, 11]
    target = 14
    result = two_sum(arr, target)
    print(*result)  # Print the result
