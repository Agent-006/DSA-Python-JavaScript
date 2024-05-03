const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  let ASCII_VALUE = 64;
  for (let i = 0; i < n; i++) {
    ASCII_VALUE += 1;
    for (let k = 0; k <= i; k++) {
      let letter = String.fromCharCode(ASCII_VALUE);
      process.stdout.write(letter + " ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
});
