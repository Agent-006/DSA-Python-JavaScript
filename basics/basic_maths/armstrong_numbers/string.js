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

function isArmstrong(n) {
  let sum = 0;
  let num = n;
  let digitCount = countDigit(n);
  while (num > 0) {
    let digit = num % 10;
    sum = sum + Math.pow(digit, digitCount);
    num = parseInt(num / 10);
  }
  if (sum == n) {
    return true;
  } else {
    return false;
  }
}

rl.question("Enter the number: ", (number) => {
  const n = parseInt(number);

  console.log(isArmstrong(n));
  process.exit(0);
});
