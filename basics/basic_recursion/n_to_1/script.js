const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function nToOne(i, n) {
  if (i < 1) return;

  process.stdout.write(i + ", ");
  nToOne(i - 1, n);
}

rl.question("Enter the value of n: ", (limit) => {
  const n = parseInt(limit);
  nToOne(n, n);

  process.exit(0);
});
