const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function moveZeroToLast(arr, n) {
  let temp = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  let nonZeros = temp.length;
  for (let i = nonZeros; i < n; i++) {
    arr[i] = 0;
  }

  return arr;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;

  console.log(...arr);
  moveZeroToLast(arr, n);
  console.log(...arr);

  rl.close();
});
