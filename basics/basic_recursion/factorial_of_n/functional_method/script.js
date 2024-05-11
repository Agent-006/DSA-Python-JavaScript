const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Functional method
// Returns the factorial of the n numbers
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

rl.question("Enter the value of n: ", (number) => {
  const n = parseInt(number);

  let fact = factorial(n);
  console.log(fact);
  rl.close();
});
