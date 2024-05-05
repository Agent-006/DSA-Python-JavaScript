const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// NOTE: This method is having a time complexity of O(n)
function printDivisors1(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + ", ");
    }
  }
}

// NOTE: This method is having a time complexity of O(sqrt(n)) + O(n log(n)) + O(n)
function printDivisors2(n) {
  let arr = [];
  // 6 * 6 <= 36
  // 7 * 7 <= 36 false
  // O(sqrt(n))
  //   for (let i = 1; i <= Math.sqrt(n); i++) { // We will not use the sqrt func bcoz it is an inbuild function and it will take different time everytime.
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
      if (n / i != i) {
        arr.push(n / i);
      }
    }
  }
  //   O(n log(n)) : n is the number of factors
  //   O(no of factors * log(no of factors))
  arr.sort((a, b) => a - b);
  // O(n)
  // O(number of factors)
  arr.forEach((value) => {
    process.stdout.write(value + ", ");
  });
}

rl.question("Enter the number: ", (number) => {
  const n = parseInt(number);

  //   printDivisors1(n);
  printDivisors2(n);
});
