const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseNumber(n) {
  let revNum = 0;
  while (n > 0) {
    let digit = n % 10;
    revNum = revNum * 10 + digit;
    n = parseInt(n / 10);
  }
  return revNum;
}

rl.question("Enter the number: ", (number) => {
  const n = parseInt(number);

  const revNum = reverseNumber(n);
  console.log(`The reverse of ${n} is ${revNum}`);
});
