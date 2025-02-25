function majorityElement(arr, n) {
    // Iterate through each element in the array
    for (let i = 0; i < n; i++) {
        let count = 0;
        // Count occurrences of the current element
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        // Check if the current element is the majority element
        if (count > n / 2) {
            return arr[i];
        }
    }
    // Return -1 if no majority element is found
    return -1;
}

const arr = [2, 2, 3, 3, 1, 2, 2];
const n = arr.length;
let result = majorityElement(arr, n);

console.log(`Majority Element: ${result}`);
// Majority Element: 2