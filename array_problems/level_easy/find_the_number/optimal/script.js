function findNumberAppearOnce(arr, n) {
    let XOR = 0; // Initialize XOR variable to 0
    for (let i = 0; i < n; i++) {
        XOR ^= arr[i]; // Perform XOR operation on each element of the array
    }
    return XOR; // Return the result of XOR operation
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5, 5]; // Input array
const n = arr.length; // Length of the array
console.log(findNumberAppearOnce(arr, n)); // Output: 3
