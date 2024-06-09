function findNumberAppearOnce(arr, n) {
  // Step 1: Find the maximum element in the array
  let maxi = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > maxi) {
      maxi = arr[i];
    }
  }

  // Step 2: Create a hash array with size equal to the maximum element + 1
  let hash = new Array(maxi + 1).fill(0);

  // Step 3: Count the frequency of each element in the array
  for (let i = 0; i < n; i++) {
    hash[arr[i]]++;
  }

  // Step 4: Find the element with frequency equal to 1
  for (let i = 0; i < maxi + 1; i++) {
    if (hash[i] == 1) {
      return i;
    }
  }
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5, 5];
const n = arr.length;
console.log(findNumberAppearOnce(arr, n)); // 3
