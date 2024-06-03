const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function leftRotate(arr, n, d) {
  d = d % n;

  let temp = [];

  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }

  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  for (let i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }

  return arr;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;

  rl.question("Enter the value of d: ", (dInput) => {
    const d = parseInt(dInput);

    console.log(...arr);
    let result = leftRotate(arr, n, d);
    console.log(...result);

    if (result) {
      process.exit(0);
    }
  });
});
