const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the size of the array: ", (sizeInput) => {
  const n = parseInt(sizeInput);
  rl.question("Enter the array elements, separate with spaces: ", (input) => {
    const arr = input.split(" ").map(Number);

    // Pre-computing/hashing
    const hash = {};

    for (let i = 0; i < n; i++) {
      hash[arr[i]] = 0;
    }
    console.log(hash);
    for (let i = 0; i < n; i++) {
      hash[arr[i]] += 1;
    }
    console.log(hash);

    // Query input
    rl.question("Enter the number of queries: ", (qInput) => {
      let q = parseInt(qInput);
      console.log("Enter the queries one by one -");
      const processQueries = () => {
        rl.question("", (numberInput) => {
          const number = parseInt(numberInput);

          // Fetch
          console.log(
            `The frequency of ${number} is ${hash[number] ? hash[number] : 0}`
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
});
