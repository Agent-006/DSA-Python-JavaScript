function missingNumber(arr, n) {
  for (let i = 1; i <= n; i++) {
    let flag = 0;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] === i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return i;
    }
  }
}

const arr = [1, 2, 4, 5];
const n = 5;
console.log(missingNumber(arr, n)); // Output: 3
