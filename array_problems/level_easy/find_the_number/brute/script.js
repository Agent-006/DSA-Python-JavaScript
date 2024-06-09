function findNumberAppearOnce(arr, n) {
  for (let i = 0; i < n; i++) {
    let num = arr[i];
    let count = 0;
    for (let k = 0; k < n; k++) {
      if (num === arr[k]) {
        count++;
      }
    }
    if (count === 1) {
      return num;
    }
  }
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5, 5];
const n = arr.length;
console.log(findNumberAppearOnce(arr, n)); // Output: 3
