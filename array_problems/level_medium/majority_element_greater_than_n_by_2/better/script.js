function majorityElement(arr, n) {
    const hashMap = new Map();
    // Iterate through each element in the array
    for (let i = 0; i < n; i++) {
        if (hashMap.has(arr[i])) {
            // Increment the count of the current element
            hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
        } else {
            // Add the current element to the hash map
            hashMap.set(arr[i], 1);
        }
    }

    // Iterate through the hash map
    for (const [key, value] of hashMap) {
        // Check if the current element is the majority element
        if (value > n / 2) {
            return key;
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
