// back-tracking method
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function nToOne(i, n) {
  if (i > n) return;

  nToOne(i + 1, n);
  process.stdout.write(i + ", ");
}

rl.question("Enter the value of n: ", (limit) => {
  const n = parseInt(limit);
  nToOne(1, n);

  process.exit(0);
});
