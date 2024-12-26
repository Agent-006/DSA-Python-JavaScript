function longestSubarrayWithSumK(arr, k) {
  let n = arr.length; // Get the length of the input array
  let left = 0; // Initialize a pointer for the left end of the subarray
  let right = 0; // Initialize a pointer for the right end of the subarray
  let sum = arr[0]; // Initialize the sum of the current subarray
  let maxLen = 0; // Initialize the maximum length of a subarray with sum k

  while (right < n) {
    // Iterate through the array until the right pointer reaches the end
    while (sum > k && left <= right) {
      // If the sum is greater than k, move the left pointer to the right and update the sum
      sum -= arr[left];
      left++;
    }

    if (sum === k) {
      // If the sum is equal to k, update the maximum length if necessary
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++; // Move the right pointer to the right
    if (right < n) {
      // If the right pointer is still within the array bounds, update the sum
      sum += arr[right];
    }
  }

  return maxLen; // Return the maximum length of a subarray with sum k
}

const arr = [1, 2, 3, 1, 1, 1, 1, 3, 3];
const k = 6;
console.log(longestSubarrayWithSumK(arr, k)); // Output: 4
