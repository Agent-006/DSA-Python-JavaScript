const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function nTimes(i, n) {
  if (i > n) return;

  process.stdout.write("Sagar\n");
  nTimes(i + 1, n);
}

rl.question("Enter the value of n: ", (limit) => {
  const n = parseInt(limit);

  nTimes(1, n);
  rl.close();
  // process.exit(0); // any one method to exit or terminate the program.
});
