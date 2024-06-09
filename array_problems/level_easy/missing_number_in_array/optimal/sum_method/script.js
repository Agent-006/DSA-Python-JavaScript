function missingNumber(arr, n) {
  let sum = (n * (n + 1)) / 2;
  let arrSum = 0;

  arr.forEach((num) => (arrSum += num));
  return sum - arrSum;
}

const arr = [1, 2, 4, 5];
console.log(missingNumber(arr, 5)); // Output: 3
