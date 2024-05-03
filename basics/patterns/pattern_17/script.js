const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    ASCII_VALUE = 64;
    for (let k = 0; k < n - i - 1; k++) {
      process.stdout.write(". ");
    }
    for (let q = 0; q < 2 * i + 1; q++) {
      if ((2 * i) / 2 >= q) {
        ASCII_VALUE += 1;
      } else {
        ASCII_VALUE -= 1;
      }
      let letter = String.fromCharCode(ASCII_VALUE);
      process.stdout.write(letter + " ");
    }
    for (let p = 0; p < n - i - 1; p++) {
      process.stdout.write(". ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
});
