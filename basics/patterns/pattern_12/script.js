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
    for (let p = 0; p < 2 * (n - i) - 2; p++) {
      process.stdout.write(". ");
    }
    for (let q = i; q >= 0; q--) {
      process.stdout.write(q + 1 + " ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
});
