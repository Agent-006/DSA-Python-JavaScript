// Dutch National Flag Algorithm OR 3-way Partitioning:
// Time Complexity: O(n)
// Space Complexity: O(1)

function sort0s1s2s(arr, n) {
    let low = 0, // Pointer for the next position of 0
        mid = 0, // Pointer for the current element
        high = n - 1; // Pointer for the next position of 2

    // Traverse the array from start to end
    while (mid <= high) {
        if (arr[mid] === 0) {
            // If the element is 0, swap it with the element at low pointer
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++; // Increment the low pointer
            mid++; // Increment the mid pointer
        } else if (arr[mid] === 1) {
            // If the element is 1, just move to the next element
            mid++;
        } else {
            // If the element is 2, swap it with the element at high pointer
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--; // Decrement the high pointer
        }
    }

    return arr; // Return the sorted array
}

const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
const n = arr.length;
let sortedArr = sort0s1s2s(arr, n);
console.log(sortedArr); // [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
