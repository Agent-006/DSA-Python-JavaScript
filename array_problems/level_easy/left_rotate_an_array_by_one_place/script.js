const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function leftRotateByOne(arr, n) {
  let temp = arr[0];

  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;

  console.log(...arr);
  leftRotateByOne(arr, n);
  console.log(...arr);

  rl.close();
});
