const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Functional method
// Returns the sum of the n numbers
function sumOfN(n) {
  if (n == 0) return 0;
  return n + sumOfN(n - 1);
}

rl.question("Enter the value of n: ", (number) => {
  const n = parseInt(number);

  let sum = sumOfN(n);
  console.log(sum);  
  rl.close();
});
