const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// using two pointer method
function reverseArray(l, r, arr) {
  if (l >= r) return;

  // swap
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;

  reverseArray(l + 1, r - 1, arr);
}

rl.question("Enter the elements of the array: ", (input) => {
  const arr = input.split(" ").map(Number);
  console.log(...arr);
  n = arr.length;
  reverseArray(0, n - 1, arr);
  console.log(...arr);

  rl.close();
});
