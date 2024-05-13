const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the size of the array: ", (sizeInput) => {
  const n = parseInt(sizeInput);

  rl.question("Enter the array elements, separate with spaces: ", (input) => {
    let arr = input.split(" ").map(Number);

    // Pre-computing/hashing
    const defaultValue = 0;
    const size = 13;
    const hash = new Array(size).fill(defaultValue);

    for (let i = 0; i < n; i++) {
      hash[arr[i]] += 1;
    }

    // Query input
    rl.question("Enter the number of queries: ", (qInput) => {
      let q = parseInt(qInput);
      console.log("Enter the queries one by one -");
      const processQueries = () => {
        rl.question("", function (numberInput) {
          const number = parseInt(numberInput);
          // Fetch
          console.log(`The frequency of ${number} is ${hash[number]}`);
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
});

rl.on("close", function () {
  process.exit(0);
});
