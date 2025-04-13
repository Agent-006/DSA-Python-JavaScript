// Import the 'fs' module to handle file system operations
let fs = require("fs");

// Function to find the maximum subarray sum using Kadane's algorithm
function maximum_subarray_sum(arr, n) {
    // Initialize maxSum to the smallest possible integer value
    let maxSum = Number.MIN_SAFE_INTEGER;
    // Initialize currentSum to track the sum of the current subarray
    let currentSum = 0;

    // Iterate over each element in the array
    for (let i = 0; i < n; i++) {
        // Add the current element to currentSum
        currentSum += arr[i];

        // Update maxSum if currentSum is greater
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        // Reset currentSum to 0 if it becomes negative
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    // Return the maximum subarray sum found
    return maxSum;
}

// Get the current directory of the script
const currentDir = __dirname;
// Define the path to the input file
const inputFile = `${currentDir}/input.txt`;

try {
    // Read the input file and process the content
    const data = fs.readFileSync(inputFile, "utf8");
    // Convert the file content into an array of numbers
    const arr = data.trim().split(" ").map(Number);
    // Get the length of the array
    const n = arr.length;

    // Calculate the maximum subarray sum
    const result = maximum_subarray_sum(arr, n);
    // Print the input array
    console.log(`Input array: ${arr}`);
    // Print the maximum subarray sum
    console.log(`Maximum subarray sum: ${result}`);
} catch (error) {
    // Handle any errors that occur during file reading
    console.error("Error reading input file:", error.message);
}
