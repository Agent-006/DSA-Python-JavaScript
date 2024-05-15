const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the array elements, separate with spaces: ", (input) => {
  const arr = input.split(" ").map(Number);

  const hash = {};

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    hash[arr[i]] = 0;
  }

  for (let i = 0; i < n; i++) {
    hash[arr[i]] += 1;
  }

  maxEle = 0;
  minEle = 0;
  maxFreq = 0;
  minFreq = n;

  for (const key in hash) {
    if (hash[key] > maxFreq) {
      maxFreq = hash[key];
      maxEle = key;
    }

    if (hash[key] < minFreq) {
      minFreq = hash[key];
      minEle = key;
    }
  }

  console.log(`Max is ${maxEle} and Min is ${minEle}`);
  rl.close();
});
