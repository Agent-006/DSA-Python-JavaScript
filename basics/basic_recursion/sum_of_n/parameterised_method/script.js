const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Parameterized method
// Pass the initial value of sum as zero(0)
function sumOfN(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  sumOfN(i - 1, sum + i);
}

rl.question("Enter the value of n: ", (number) => {
  const n = parseInt(number);

  sumOfN(n, 0);
  rl.close();
});
