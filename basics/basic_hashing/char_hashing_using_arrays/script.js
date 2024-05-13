const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string: ", (sInput) => {
  let s = sInput;

  // Pre-computing/hashing
  defaultValue = 0;
  // Incase you have other characters also then change the size to 256.
  size = 26;

  let hash = new Array(size).fill(defaultValue);
  for (let i = 0; i < s.length; i++) {
    hash[s[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  // Query input
  rl.question("Enter the number of queries: ", (qInput) => {
    let q = parseInt(qInput);
    console.log("Enter the queries one by one -");
    const processQueries = () => {
      rl.question("", (stringInput) => {
        const c = stringInput;
        //Fetch
        console.log(
          `The frequency of ${c} is ${
            hash[c.charCodeAt(0) - "a".charCodeAt(0)]
          }`
        );
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
