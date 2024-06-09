function missingNumber(arr, n) {
  let hash = new Array(n + 1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    hash[arr[i]] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }
}

const arr = [1, 2, 4, 5];
console.log(missingNumber(arr, 5)); // Output: 3