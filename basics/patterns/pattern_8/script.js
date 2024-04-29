const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
      process.stdout.write("  ");
    }
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      process.stdout.write("* ");
    }
    for (let p = 0; p <= i; p++) {
      process.stdout.write("  ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
});
