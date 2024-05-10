const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count += 1;
      if (n / i != i) {
        count += 1;
      }
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}

rl.question("Enter the number: ", (number) => {
  const n = parseInt(number);

  console.log(isPrime(n));
  process.exit(0);
});
