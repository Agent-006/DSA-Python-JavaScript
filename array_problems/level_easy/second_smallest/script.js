const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function secondSmallestElement(arr, n) {
  let smallest = arr[0];
  let s_smallest = 1000000000;

  for (let i = 0; i < n; i++) {
    if (arr[i] < smallest) {
      s_smallest = smallest;
      smallest = arr[i];
    } else if (arr[i] != smallest && arr[i] < s_smallest) {
      s_smallest = arr[i];
    }
  }
  return s_smallest;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);

  let n = arr.length;
  let result = secondSmallestElement(arr, n);
  console.log(result);

  rl.close();
});
