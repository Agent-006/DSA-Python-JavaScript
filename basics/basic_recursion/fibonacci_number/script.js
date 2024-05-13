const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

rl.question("Enter the value of n: ", (input) => {
  const n = parseInt(input);
  let result = fibonacci(n);
  console.log(result);

  rl.close();
});
