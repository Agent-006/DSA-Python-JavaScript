# This is not the optimal for the second varient of the 2sum problem

def two_sum(arr, target):
    # Get the length of the array
    n = len(arr)

    # Sort the array to use the two-pointer technique
    sorted_arr = sorted(arr)
    left = 0
    right = n - 1

    # Use two pointers to find the two numbers that sum up to the target
    while left < right:
        sum = sorted_arr[left] + sorted_arr[right]

        # If the sum is equal to the target, return "YES"
        if sum == target:
            return "YES"
        # If the sum is less than the target, move the left pointer to the right
        elif sum < target:
            left += 1
        # If the sum is greater than the target, move the right pointer to the left
        else:
            right -= 1
    # If no such pair is found, return "NO"
    return "NO"


if __name__ == "__main__":
    # Example array and target
    arr = [2, 6, 5, 8, 11]
    target = 14
    # Call the two_sum function and store the result
    result = two_sum(arr, target)
    # Print the result
    print(result)
