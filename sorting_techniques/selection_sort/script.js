const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selection_sort(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    for (let k = 0; k <= i; k++) {
      if (arr[k] > arr[i]) {
        let temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

rl.question('',(length) => {
  const n = parseInt(length);

  rl.question('',(input) => {
    const arr = input.split(" ").map(Number);

    const sortedNumbers = selection_sort(arr, n);

    console.log("Sorted array:", ...sortedNumbers);

    rl.close();
  });
});
