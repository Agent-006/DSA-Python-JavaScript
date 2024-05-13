const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (stringInput) => {
  const s = stringInput;

  // pre-compute/hashing
  hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = 0;
  }
  console.log(hash);
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] += 1;
  }
  console.log(hash);

  // Query input
  rl.question("Enter the number of queries: ", (qInput) => {
    let q = parseInt(qInput);
    console.log("Enter the queries one by one - ");
    const processQueries = () => {
      rl.question("", (charInput) => {
        const c = charInput;

        // fetch
        console.log(`The frequency of ${c} is ${hash[c] ? hash[c] : 0}`);
        if (--q > 0) {
          processQueries();
        } else {
          rl.close();
        }
      });
    };
    processQueries();
  });
});

rl.on("close", () => {
  process.exit(0);
});
