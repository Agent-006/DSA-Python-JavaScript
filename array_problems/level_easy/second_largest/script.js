const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function secondLargestElement(arr, n) {
  let largest = arr[0];
  let s_largest = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      s_largest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > s_largest && arr[i] !== largest) {
      s_largest = arr[i];
    }
  }
  return s_largest;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);

  let n = arr.length;
  let result = secondLargestElement(arr, n);
  console.log(result);

  rl.close();
});
