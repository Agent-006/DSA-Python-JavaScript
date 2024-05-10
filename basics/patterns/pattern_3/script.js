const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      process.stdout.write(k + 1 + " ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the limit: ", (limit) => {
  const n = parseInt(limit);

  printPattern(n);
  process.exit(0);
});
