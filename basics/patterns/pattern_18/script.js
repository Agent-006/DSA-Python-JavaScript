const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let ASCII_VALUE = 64 + n;
    for (let k = ASCII_VALUE - i; k <= ASCII_VALUE; k++) {
      let letter = String.fromCharCode(k);
      process.stdout.write(letter + " ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
  process.exit(0);
});
