function twoSum(arr, target) {
    let n = arr.length;

    let left = 0;
    let right = n - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return "YES";
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return "NO";
}

const arr = [2, 6, 5, 8, 11];
const target = 14;
console.log(twoSum(arr, target)); 