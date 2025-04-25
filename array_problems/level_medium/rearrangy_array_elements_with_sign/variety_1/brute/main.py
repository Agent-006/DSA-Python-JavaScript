import os

def rearrange_array_elements_with_sign(arr: list, n: int) -> list:
    # Initialize lists to hold positive and negative numbers
    pos = []
    neg = []

    # Separate the array into positive and negative numbers
    for i in range(n):
        if arr[i] > 0:
            pos.append(arr[i])  # Add positive numbers to pos list
        else:
            neg.append(arr[i])  # Add negative numbers to neg list

    # Rearrange the array by alternating positive and negative numbers
    for i in range(n // 2):
        arr[2 * i] = pos[i]      # Place positive number at even index
        arr[2 * i + 1] = neg[i]  # Place negative number at odd index

    # Return the rearranged array
    return arr


if __name__ == "__main__":
    # Get the current directory of the script
    current_dir = os.path.dirname(os.path.abspath(__file__))
    # Define the path to the input file
    input_file = os.path.join(current_dir, "input.txt")

    # Read the input file and process the content
    with open(input_file, "r") as file:
        content = file.read().strip()
        arr = list(map(int, content.split()))

    # Get the length of the array
    n = len(arr)
    # Rearrange the array elements by sign
    result = rearrange_array_elements_with_sign(arr, n)
    # Print the rearranged array
    print(f"Rearranged Array: {result}")