const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function bubbleSort(arr, n) {
  // base case
  if (n == 1) return;

  for (let i = 0; i <= n - 2; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  bubbleSort(arr, n - 1);
}

rl.question("Enter the array elements, separate with spaces: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;
  console.log(`Before sorting: ${arr}`);
  bubbleSort(arr, n);
  console.log(`After sorting: ${arr}`);
  rl.close();
});
