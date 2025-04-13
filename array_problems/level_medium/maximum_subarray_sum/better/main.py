import os
import sys

def maximum_subarray_sum(arr: list, n: int) -> int:
    # Initialize max_sum to the smallest possible integer value
    max_sum = -sys.maxsize - 1

    # Iterate over each starting point of the subarray
    for i in range(n):
        current_sum = 0
        # Iterate over each ending point of the subarray
        for k in range(i, n):
            # Add the current element to the current_sum
            current_sum += arr[k]
            # Update max_sum if current_sum is greater
            max_sum = max(max_sum, current_sum)

    return max_sum


if __name__ == "__main__":
    # Get the current directory of the script
    current_dir = os.path.dirname(os.path.abspath(__file__))
    # Define the path to the input file
    input_file = os.path.join(current_dir, "input.txt")

    # Read the input file and process the content
    with open(input_file, "r") as file:
        content = file.read().strip()
        arr = list(map(int, content.split()))
        n = len(arr)

    # Calculate the maximum subarray sum
    result = maximum_subarray_sum(arr, n)
    # Print the result
    print(f"Maximum Subarray Sum: {result}")
