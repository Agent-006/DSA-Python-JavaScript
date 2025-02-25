import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// merge algo
function merge(arr, low, mid, high) {
  // [low...mid]
  // [mid+1...high]
  let left = low;
  let right = mid + 1;
  let temp = [];

  // checking if the left pointer exceeds the mid and right pointer exceeds high
  while (left <= mid && right <= high) {
    // checking which value is smaller
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // if the right array exceeds the all the elements left in the 'left' array are added to the temp.
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // if the left array exceeds the all the elements right in the 'right' array are added to the temp.
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // changing the elements of the original array in a sorted order.
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}
// merge_sort algorithm
function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = parseInt((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

// Taking the array inputs
rl.question("Enter the array elements, separate with spaces: ", (input) => {
  const arr = input.split(" ").map(Number);
  let n = arr.length;
  console.log(...arr);
  mergeSort(arr, 0, n - 1);
  console.log(...arr);

  rl.close();
});
