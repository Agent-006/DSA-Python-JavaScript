const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function insertionSort(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    let k = i;
    while (k > 0 && arr[k - 1] > arr[k]) {
      let temp = arr[k - 1];
      arr[k - 1] = arr[k];
      arr[k] = temp;
      k--;
    }
  }

  return arr;
}

rl.question('',(length) => {
  const n = parseInt(length);

  rl.question('',(input) => {
    const arr = input.split(" ").map(Number);

    const sortedNumbers = insertionSort(arr, n);

    console.log(...sortedNumbers);

    rl.close(); 
  });
});
