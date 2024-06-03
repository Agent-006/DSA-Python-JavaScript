const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rightRotate(arr, n, k) {
  k = k % n;
  let temp = [];

  for (let i = n - k; i < n; i++) {
    temp.push(arr[i]);
  }

  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }

  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }

  return arr;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;

  rl.question("Enter the value of k: ", (dInput) => {
    const k = parseInt(dInput);

    console.log(...arr);
    let result = rightRotate(arr, n, k);
    console.log(...result);

    if (result) {
      process.exit(0);
    }
  });
});
