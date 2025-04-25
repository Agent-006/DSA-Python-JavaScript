const fs = require("fs");

// Function to rearrange array elements by sign
function rearrangeArrayElementsWithSign(arr, n) {
    // Initialize an array to store the rearranged elements
    const ansArray = new Array(n);
    // Initialize indices for positive and negative numbers
    let positiveIndex = 0;
    let negativeIndex = 1;

    // Iterate over the array to place elements in the correct position
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            // Place positive number at the current positive index
            ansArray[positiveIndex] = arr[i];
            // Move to the next position for positive numbers
            positiveIndex += 2;
        } else {
            // Place negative number at the current negative index
            ansArray[negativeIndex] = arr[i];
            // Move to the next position for negative numbers
            negativeIndex += 2;
        }
    }

    // Return the rearranged array
    return ansArray;
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
