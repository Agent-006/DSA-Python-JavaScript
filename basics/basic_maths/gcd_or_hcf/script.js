const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gcd(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  if (a == 0) return b;
  return a;
}

rl.question("Enter the first number: ", (num1) => {
  const a = parseInt(num1);

  rl.question("Enter the second number: ", (num2) => {
    const b = parseInt(num2);

    console.log(gcd(a, b));
  });
});
