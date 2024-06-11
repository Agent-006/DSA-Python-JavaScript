function longestSubarray(arr, n, num) {
  let max_length = 0;

  // Loop through each starting index of the subarray
  for (let i = 0; i < n; i++) {
    // Loop through each ending index of the subarray
    for (let j = i; j < n; j++) {
      let sum = 0;
      // Calculate the sum of elements in the subarray
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      // If the sum matches the given number, update the maximum length
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
