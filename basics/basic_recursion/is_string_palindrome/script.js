const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(i, s) {
  let n = s.length;
  if (i >= n / 2) return true;

  if (s[i] !== s[n - i - 1]) return false;

  return isPalindrome(i + 1, s);
}

rl.question("Enter the string: ", (input) => {
  const s = input;
  let result = isPalindrome(0, s);
  console.log(result);

  rl.close();
});
