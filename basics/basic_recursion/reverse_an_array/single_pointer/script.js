const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseArray(i, arr) {
  n = arr.length;
  if (i >= n / 2) return;

  //   swap
  let temp = arr[i];
  arr[i] = arr[n - i - 1];
  arr[n - i - 1] = temp;

  reverseArray(i + 1, arr);
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);
  console.log(arr);
  reverseArray(0, arr);
  console.log(arr);

  rl.close()
});
