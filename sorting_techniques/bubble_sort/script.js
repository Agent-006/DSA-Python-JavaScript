const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function bubble_sort(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    let swap = 0;
    for (let k = 0; k < n - i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
        swap = 1;
      }
    }
    if (swap === 0) {
      break;
    }
  }

  return arr;
}

rl.question("Enter the length of the array: ", (length) => {
  const n = parseInt(length);

  rl.question(`Enter ${n} numbers separated by space: `, (input) => {
    const arr = input.split(" ").map(Number);

    const sortedNumbers = bubble_sort(arr, n);

    console.log("Sorted array:", ...sortedNumbers);

    rl.close();
  });
});
