function arrayUnion(arr1, arr2) {
  let i = 0,
    j = 0;
  let union = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (union.length === 0 || arr1[i] !== union[union.length - 1]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (union.length === 0 || arr2[j] !== union[union.length - 1]) {
        union.push[arr2[j]];
      }
      j++;
    }
  }

  while (i < arr1.length) {
    if (union.length === 0 || arr1[i] !== union[union.length - 1]) {
      union.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (union.length === 0 || arr2[j] !== union[union.length - 1]) {
      union.push[arr2[j]];
    }
    j++;
  }

  return union;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let result = arrayUnion(arr1, arr2);
console.log(result);
