const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function arrayIsSorted(arr, n) {
  for (let i = 1; i < n; i++) {
    if (arr[i] >= arr[i - 1]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);

  let length = arr.length;

  let result = arrayIsSorted(arr, length);
  console.log(result);

  rl.close();
});
