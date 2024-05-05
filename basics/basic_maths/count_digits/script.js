const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countDigit(n) {
  let count = 0;
  while (n > 0) {
    n = parseInt(n / 10);
    count += 1;
  }
  return count;
}

rl.question("Enter the number: ", (number) => {
  const n = parseInt(number);

  const digits = countDigit(n);
  console.log(`The number of digits in ${n} is: ${digits}`);
});
