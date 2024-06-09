const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

rl.question("Enter the array elements separated by space: ", (input) => {
  const arr = input.split(" ").map(Number);
  rl.question("Enter the number to be searched: ", (n) => {
    let num = parseInt(n);
    let result = linearSearch(arr, num);
    console.log(result);
    rl.close();
  });
});
