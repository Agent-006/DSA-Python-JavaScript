import os

def majority_element_greater_than_n_by_2(arr: list, n: int) -> int:
    # Initialize variables to track the potential majority element and its count
    element = None
    count = 0
    
    # First pass: Find a candidate for the majority element using Boyer-Moore Voting Algorithm
    for i in range(n):
        if count == 0:
            # Set the current element as the potential majority element
            element = arr[i]
            count = 1
        elif element == arr[i]:
            # Increment count if the current element matches the potential majority element
            count += 1
        else:
            # Decrement count if the current element does not match
            count -= 1
            
    # Second pass: Verify if the candidate is actually the majority element
    count_element = 0
    for i in range(n):
        if arr[i] == element:
            count_element += 1
    
    # Check if the candidate occurs more than n/2 times
    if count_element > n // 2:
        return element
    
    # Return -1 if no majority element is found
    return -1

if __name__ == '__main__':
    # Determine the current directory and input file path
    current_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(current_dir, 'input.txt')
    
    # Read the input file and parse the array
    with open(input_file, 'r') as file:
        content = file.read().strip()
        arr = list(map(int, content.split()))
        n = len(arr)
        
    # Find and print the majority element
    result = majority_element_greater_than_n_by_2(arr, n)
    print(f"Input array: {arr}")
    print(f"Majority element: {result}")