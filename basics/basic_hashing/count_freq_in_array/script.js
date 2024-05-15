const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the array elements, separate with spaces: ", (input) => {
  const arr = input.split(" ").map(Number);

  const hash = {};

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    hash[arr[i]] = 0;
  }

  for (let i = 0; i < n; i++) {
    hash[arr[i]] += 1;
  }

  for (const x in hash) {
    console.log(`${x} occurs ${hash[x]} in the array`);
  }
  rl.close();
});
