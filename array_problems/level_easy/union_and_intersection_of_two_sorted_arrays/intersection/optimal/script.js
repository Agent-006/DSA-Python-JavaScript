function arrayIntersection(arr1, arr2) {
  let i = 0;
  let k = 0;
  let result = [];
  while (i < arr1.length && k < arr2.length) {
    if (arr1[i] < arr2[k]) {
      i++;
    } else if (arr1[i] > arr2[k]) {
      k++;
    } else {
      result.push(arr1[i]);
      i++;
      k++;
    }
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5, 5, 8];
const arr2 = [1, 1, 2, 4, 5, 5, 6, 7, 8];
result = arrayIntersection(arr1, arr2);
console.log(result);
