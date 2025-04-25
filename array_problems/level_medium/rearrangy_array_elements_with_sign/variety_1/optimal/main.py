import os

# Function to rearrange array elements by sign
def rearrange_array_elements_with_sign(arr: list, n: int) -> list:
    # Initialize an array to store the rearranged elements
    ans_arr = [0] * n
    # Initialize indices for positive and negative numbers
    posIndex = 0
    negIndex = 1
    # Iterate over the array to place elements in the correct position
    for i in range(n):
        if arr[i] > 0:
            # Place positive number at the current positive index
            ans_arr[posIndex] = arr[i]
            # Move to the next position for positive numbers
            posIndex += 2
        else:
            # Place negative number at the current negative index
            ans_arr[negIndex] = arr[i]
            # Move to the next position for negative numbers
            negIndex += 2

    # Return the rearranged array
    return ans_arr

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
    # Rearrange the array elements by sign
    result = rearrange_array_elements_with_sign(arr, n)
    # Print the rearranged array
    print(f"Rearranged Array: {result}")
