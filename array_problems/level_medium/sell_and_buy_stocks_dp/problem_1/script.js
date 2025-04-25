const fs = require("fs");

function maximum_profit(prices) {
    let n = prices.length;
    let minimumPrice = prices[0];
    let maximumProfit = 0;

    for (let i = 1; i < n; i++) {
        let cost = prices[i] - minimumPrice;
        maximumProfit = Math.max(maximumProfit, cost);

        minimumPrice = Math.min(minimumPrice, prices[i]);
    }
    return maximumProfit;
}

const currentDir = __dirname;

const inputFile = `${currentDir}/input.txt`;

try {
    const data = fs.readFileSync(inputFile, "utf-8");
    const prices = data.trim().split(" ").map(Number);

    const result = maximum_profit(prices);
    console.log(`Input prices: ${prices}`);
    console.log(`Maximum profit: ${result}`);
} catch (error) {
    console.error("Error reading input file:", error.message);
}
