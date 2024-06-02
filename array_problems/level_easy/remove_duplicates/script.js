const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function removeDuplicates(arr, n) {
  let i = 0;

  for (let k = 0; k < n; k++) {
    if (arr[i] !== arr[k]) {
      arr[i + 1] = arr[k];
      i++;
    }
  }

  return i + 1;
}

rl.question("Enter the array elements: ", (input) => {
  const arr = input.split(" ").map(Number);
  let length = arr.length;
  let result = removeDuplicates(arr, length);

  console.log(result);

  rl.close();
});
