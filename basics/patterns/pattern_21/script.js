const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (i === 0 || k === 0 || i === n - 1 || k === n - 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
});
