const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let k = 0; k < 2 * n - 1; k++) {
      let top = i;
      let left = k;
      let right = 2 * n - 2 - k;
      let bottom = 2 * n - 2 - i;
      process.stdout.write(
        n - Math.min(Math.min(top, bottom), Math.min(left, right)) + " "
      );
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
  process.exit(0);
});
