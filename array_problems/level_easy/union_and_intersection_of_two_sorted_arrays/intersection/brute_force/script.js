function arrayIntersection(arr1, arr2) {
  let isVisited = new Array(arr2.length).fill(0);
  let ans = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && isVisited[j] === 0) {
        ans.push(arr1[i]);
        isVisited[j] = 1;
        break;
      }

      if (arr2[j] > arr1[i]) break;
    }
  }

  return ans;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let result = arrayIntersection(arr1, arr2);
console.log(result);
