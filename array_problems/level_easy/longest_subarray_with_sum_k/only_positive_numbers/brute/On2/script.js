function longestSubarray(arr, n, num) {
  let max_length = 0;

  // Iterate through each element in the array
  for (let i = 0; i < n; i++) {
    let sum = 0;

    // Calculate the sum of subarrays starting from index i
    for (let j = i; j < n; j++) {
      sum += arr[j];

      // If the sum matches the target number, update the maximum length
      if (sum == num) {
        max_length = Math.max(max_length, j - i + 1);
      }
    }
  }
  return max_length;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;
let num = 15;
console.log(longestSubarray(arr, n, num)); // 5
