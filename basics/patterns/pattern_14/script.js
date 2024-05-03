const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let ASCII = 64;
    for (let k = 0; k <= i; k++) {
      ASCII += 1;
      let letter = String.fromCharCode(ASCII);
      process.stdout.write(letter + " ");
    }
    process.stdout.write("\n");
  }
}

rl.question("Enter the size: ", (size) => {
  const n = parseInt(size);

  printPattern(n);
});
