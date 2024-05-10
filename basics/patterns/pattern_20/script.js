const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  let initialSpace = 2 * n - 2;
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    for (let k = 1; k <= stars; k++) {
      process.stdout.write("* ");
    }
    for (let k = 1; k <= initialSpace; k++) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= stars; k++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
    if (i < n) initialSpace -= 2;
    else initialSpace += 2;
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
  process.exit(0);
});
