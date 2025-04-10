const fs = require("fs");

function maximum_subarray_sum(arr, n) {
    // Initialize max_sum to the smallest possible integer value
    let max_sum = Number.MIN_SAFE_INTEGER;

    // Iterate over each starting point of the subarray
    for (let i = 0; i < n; i++) {
        // Iterate over each ending point of the subarray
        for (let j = i; j < n; j++) {
            // Reset current_sum for the new subarray
            let current_sum = 0;
            // Calculate the sum of the current subarray
            for (let k = i; k <= j; k++) {
                current_sum += arr[k];
            }
            // Update max_sum if the current subarray sum is greater
            max_sum = Math.max(max_sum, current_sum);
        }
    }
    // Return the maximum subarray sum found
    return max_sum;
}

// Read input file and process the array
const currentDir = __dirname;
const inputFile = `${currentDir}/input.txt`;

try {
    const data = fs.readFileSync(inputFile, "utf8");
    const arr = data.trim().split(" ").map(Number);
    const n = arr.length;

    // Find and print the maximum subarray sum
    const result = maximum_subarray_sum(arr, n);
    console.log(`Input array: ${arr}`);
    console.log(`Maximum subarray sum: ${result}`);
} catch (error) {
    console.error("Error reading input file:", error.message);
}