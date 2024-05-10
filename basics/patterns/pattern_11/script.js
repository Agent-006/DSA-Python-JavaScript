const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let start = 1;
    if (i % 2 == 0) {
      start = 1;
    } else {
      start = 0;
    }
    for (let k = 0; k <= i; k++) {
      process.stdout.write(start + " ");
      start = 1 - start;
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
  process.exit(0);
});
