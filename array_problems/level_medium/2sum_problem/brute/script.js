function twoSum(arr, target) {
    let n = arr.length;
    // Iterate through each element in the array
    for (let i = 0; i < n; i++) {
        // For each element, iterate through the remaining elements
        for (let j = i + 1; j < n; j++) {
            // Check if the sum of the two elements is equal to the target
            if (arr[i] + arr[j] === target) {
                // If so, return their indices
                return [i, j];
            }
        }
    }
}

const arr = [2, 6, 5, 8, 11]; // Example array
const target = 14; // Example target sum
let result = twoSum(arr, target); // [1, 2]
console.log(...result); // Output the result
