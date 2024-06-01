const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function largestElement(arr, n) {
  let largest = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  return largest;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);

  let n = arr.length;
  let result = largestElement(arr, n);
  console.log(result);

  rl.close();
});
