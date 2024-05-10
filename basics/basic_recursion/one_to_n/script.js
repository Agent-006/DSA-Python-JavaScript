const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// back-tracking method
function oneToN(i, n) {
  if (i > n) return;

  process.stdout.write(i + ", ");
  oneToN(i + 1, n);
}

rl.question("Enter the value of n: ", (limit) => {
  const n = parseInt(limit);

  oneToN(1, n);
  rl.close();
});
