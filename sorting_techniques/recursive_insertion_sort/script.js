const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function insertionSort(arr, i, n) {
  // base case
  if (i == n) return;

  let k = i;
  while (k > 0 && arr[k - 1] > arr[k]) {
    let temp = arr[k - 1];
    arr[k - 1] = arr[k];
    arr[k] = temp;
    k--;
  }

  insertionSort(arr, i + 1, n);
}

rl.question("Enter the array elements, separate with spaces: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;
  console.log(`Before sorting: ${arr}`);
  insertionSort(arr, 0, n);
  console.log(`After sorting: ${arr}`);
  rl.close();
});
