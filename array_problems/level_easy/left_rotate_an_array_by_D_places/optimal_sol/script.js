const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateLeft(arr, n, d) {
  d = d % n;

  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);

  return arr;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;

  rl.question("Enter the value of d: ", (dInput) => {
    const d = parseInt(dInput);

    console.log(...arr);
    let result = rotateLeft(arr, n, d);
    console.log(...arr);

    if (result) process.exit(0);
  });
});
