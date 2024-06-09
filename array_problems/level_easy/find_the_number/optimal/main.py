def find_number_appear_once(arr, n):
    XOR = 0  # Initialize XOR variable to 0
    for i in range(n):  # Iterate through the array
        XOR = XOR ^ arr[i]  # Perform XOR operation with each element
    return XOR  # Return the final XOR value

arr = [2, 3, 5, 4, 5, 3, 4]  # Input array
n = len(arr)  # Get the length of the array
print(find_number_appear_once(arr, n))  # Call the function and print the result