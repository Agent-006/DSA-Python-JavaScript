function longestSubarray(arr, k) {
  let n = arr.length;
  const hash_map = new Map();
  let prefix_sum = 0;
  let max_length = 0;

  for (let i = 0; i < n; i++) {
    prefix_sum += arr[i];

    if (prefix_sum === k) {
      max_length = Math.max(max_length, i + 1);
    }

    let rem_elem = prefix_sum - k;

    if (hash_map.has(rem_elem)) {
      let length = i - hash_map.get(rem_elem);
      max_length = Math.max(max_length, length);
    }

    if (!hash_map.has(prefix_sum)) {
      hash_map.set(prefix_sum, i);
    }
  }

  return max_length;
}

const arr = [1, 2, 3, 0, 0, 1, 1, 1, 1, 4, 2, 3];
const k = 3;
console.log(longestSubarray(arr, k));
