const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(n) {
  let revNum = 0;
  let num = n;
  while (num > 0) {
    let digit = num % 10;
    revNum = revNum * 10 + digit;
    num = parseInt(num / 10);
  }
  if (revNum === n) {
    return true;
  } else {
    return false;
  }
}

rl.question("Enter the number: ", (number) => {
  const n = parseInt(number);

  console.log(isPalindrome(n));
});
