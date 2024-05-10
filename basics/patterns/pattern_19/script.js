const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  let initialSpace = 0;
  for (let i = 0; i < n; i++) {
    for (let k = 1; k <= n - i; k++) {
      process.stdout.write("* ");
    }
    for (let k = 0; k < initialSpace; k++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= n - i; k++) {
      process.stdout.write("* ");
    }
    initialSpace += 2;
    process.stdout.write("\n");
  }

  initialSpace = 2 * n - 2;
  for (let i = 0; i < n; i++) {
    for (let k = 1; k <= i; k++) {
      process.stdout.write("* ");
    }
    for (let k = 0; k < initialSpace; k++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write("* ");
    }
    initialSpace -= 2;
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
  process.exit(0);
});
