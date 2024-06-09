function findNumberAppearOnce(arr, n) {
    let hash_map = {}; // Create an empty object to serve as a hash map

    // Iterate through the array
    for (let i = 0; i < n; i++) {
        if (hash_map[arr[i]]) { // If the current element already exists as a key in the hash map
            hash_map[arr[i]]++; // Increment its value by 1
        } else {
            hash_map[arr[i]] = 1; // Otherwise, set its value to 1
        }
    }

    // Iterate through the hash map
    for (let key in hash_map) {
        if (hash_map[key] === 1) { // If the value of a key is 1
            return key; // Return that key (the number that appears only once)
        }
    }
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5, 5];
const n = arr.length;
console.log(findNumberAppearOnce(arr, n)); // Output: 3
