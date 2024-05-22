const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getPivot(arr, low, high) {
  let pivot = arr[low];
  i = low;
  k = high;

  while (i < k) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[k] > pivot && k >= low + 1) {
      k--;
    }

    if (i < k) {
      let temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp;
    }
  }
  temp = arr[low];
  arr[low] = arr[k];
  arr[k] = temp;

  return k;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let partition = getPivot(arr, low, high);
    quickSort(arr, low, partition - 1);
    quickSort(arr, partition + 1, high);
  }

  return arr;
}

rl.question("Enter the array elements, separated with spaces: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;
  let result = quickSort(arr, 0, n - 1);
  console.log(result);
  rl.close();
});
