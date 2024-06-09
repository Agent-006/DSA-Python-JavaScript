function missingNumber(arr, n) {
  let XOR1 = 0;
  let XOR2 = 0;
  for (let i = 0; i < n - 1; i++) {
    XOR2 = XOR2 ^ arr[i];
    XOR1 = XOR1 ^ (i + 1);
  }
  XOR1 = XOR1 ^ n;

  return XOR1 ^ XOR2;
}

const arr = [1, 2, 4, 5];
const n = 5;
console.log(missingNumber(arr, n)); // Output: 3
