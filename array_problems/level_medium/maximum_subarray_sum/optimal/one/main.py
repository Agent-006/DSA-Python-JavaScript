import os
import sys

def maximum_subarray_sum(arr: list, n: int) -> int:
    # Initialize max_sum to the smallest possible integer value
    max_sum = -sys.maxsize - 1
    # Initialize current_sum to track the sum of the current subarray
    current_sum = 0

    # Iterate over each element in the array
    for i in range(n):
        # Add the current element to current_sum
        current_sum += arr[i]

        # Update max_sum if current_sum is greater
        if current_sum > max_sum:
            max_sum = current_sum

        # Reset current_sum to 0 if it becomes negative
        if current_sum < 0:
            current_sum = 0

    # Return the maximum subarray sum found
    return max_sum

if __name__ == "__main__":
    # Get the current directory of the script
    current_dir = os.path.dirname(os.path.abspath(__file__))
    # Define the path to the input file
    input_file = os.path.join(current_dir, "input.txt")

    # Read the input file and process the content
    with open(input_file, "r") as file:
        content = file.read().strip()
        # Convert the file content into an array of numbers
        arr = list(map(int, content.split()))
        # Get the length of the array
        n = len(arr)

    # Calculate the maximum subarray sum
    result = maximum_subarray_sum(arr, n)
    # Print the maximum subarray sum
    print(f"Maximum Subarray Sum: {result}")
