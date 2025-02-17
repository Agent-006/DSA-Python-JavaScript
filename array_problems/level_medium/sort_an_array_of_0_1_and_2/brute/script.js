function sort0s1s2s(arr, n) {
    // Initialize counters for 0s, 1s, and 2s
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    // Count the number of 0s, 1s, and 2s in the array
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            count0++;
        } else if (arr[i] === 1) {
            count1++;
        } else if (arr[i] === 2) {
            count2++;
        }
    }

    // Place the 0s in the beginning of the array
    for (let i = 0; i < count0; i++) {
        arr[i] = 0;
    }

    // Place the 1s after the 0s
    for (let i = count0; i < count0 + count1; i++) {
        arr[i] = 1;
    }

    // Place the 2s after the 1s
    for (let i = count0 + count1; i < n; i++) {
        arr[i] = 2;
    }

    // Return the sorted array
    return arr;
}

// Example usage
const arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
const n = arr.length;
console.log(sort0s1s2s(arr, n)); // [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2]
