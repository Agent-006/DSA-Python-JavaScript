const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  let value = 0;
  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      value += 1;
      process.stdout.write(value + " ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
  process.exit(0);
});
