const fs = require("fs");

// Function to rearrange array elements by sign
function rearrangeArrayElementsWithSign(arr, n) {
    // Arrays to hold positive and negative numbers
    let positive = [];
    let negative = [];

    // Separate the array into positive and negative numbers
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive.push(arr[i]); // Add to positive array
        } else {
            negative.push(arr[i]); // Add to negative array
        }
    }

    // Rearrange the array by alternating positive and negative numbers
    for (let i = 0; i < n / 2; i++) {
        arr[2 * i] = positive[i];     // Place positive number at even index
        arr[2 * i + 1] = negative[i]; // Place negative number at odd index
    }

    // Return the rearranged array
    return arr;
}

// Get the current directory of the script
const currentDir = __dirname;
// Define the path to the input file
const inputFile = `${currentDir}/input.txt`;

try {
    // Read the input file and process the content
    const data = fs.readFileSync(inputFile, "utf-8");
    // Convert the file content into an array of numbers
    const arr = data.trim().split(" ").map(Number);

    // Get the length of the array
    const n = arr.length;
    // Rearrange the array elements by sign
    const result = rearrangeArrayElementsWithSign(arr, n);
    // Print the rearranged array
    console.log(`Rearranged array: ${result}`);
} catch (error) {
    // Handle any errors that occur during file reading
    console.error("Error reading input file:", error.message);
}