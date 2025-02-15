function twoSum(arr, target) {
    let n = arr.length;
    let hashMap = {};

    // Iterate through the array
    for (let i = 0; i < n; i++) {
        let element = arr[i];
        let requiredElement = target - element;

        // Check if the required element is already in the hashMap
        if (hashMap[requiredElement] !== undefined) {
            // If found, return the indices of the current element and the required element
            return [i, hashMap[requiredElement]];
        }

        // Store the index of the current element in the hashMap
        hashMap[arr[i]] = i;
    }
}  

const arr = [2, 6, 5, 8, 11];
let target = 14;
let result = twoSum(arr, target);
console.log(...result); // Output the result
