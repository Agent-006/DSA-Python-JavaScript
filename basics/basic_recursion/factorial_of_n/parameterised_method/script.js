const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Parameterized method
// Pass the initial value of fact as one(1)
function factorial(i, fact) {
  if (i === 0 || i === 1) {
    console.log(fact);
    return;
  }
  factorial(i - 1, fact * i);
}

rl.question("Enter the value of n: ", (number) => {
  const n = parseInt(number);

  factorial(n, 1);
  rl.close();
});
