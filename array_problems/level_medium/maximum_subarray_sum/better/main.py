import sys
import os

def maximum_subarray_sum(arr: list, n: int) -> int:
    # Initialize max_sum to the smallest possible integer value
    max_sum = -sys.maxsize - 1

    # Iterate over each starting point of the subarray
    for i in range(n):
        # Iterate over each ending point of the subarray
        for j in range(i, n):
            # Reset current_sum for the new subarray
            current_sum = 0
            # Calculate the sum of the current subarray
            for k in range(i, j + 1):
                current_sum += arr[k]
            # Update max_sum if the current subarray sum is greater
            max_sum = max(max_sum, current_sum)
    # Return the maximum subarray sum found
    return max_sum

if __name__ == "__main__":
    # Determine the current directory and input file path
    current_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(current_dir, "input.txt")

    # Read the input file and parse the array
    with open(input_file, "r") as file:
        content = file.read().strip()
        arr = list(map(int, content.split()))
        n = len(arr)

    # Find and print the maximum subarray sum
    result = maximum_subarray_sum(arr, n)
    print(f"Input array: {arr}")
    print(f"Maximum subarray sum: {result}")
