const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function moveZeroToLast(arr, n) {
  k = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      k = i;
      break;
    }
  }

  for (let i = k + 1; i < n; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp;
      k++;
    }
  }

  return arr;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;

  console.log(...arr);
  moveZeroToLast(arr, n);
  console.log(...arr);

  rl.close();
});
