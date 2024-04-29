const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPatterns(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < cols; k++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the no. of rows: ", (r) => {
  const rows = parseInt(r);

  rl.question("Enter the number of cols: ", (c) => {
    const cols = parseInt(c);

    printPatterns(rows, cols);
  });
});
