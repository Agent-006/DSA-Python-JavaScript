function arrayUnion(arr1, arr2) {
  let mySet = new Set();

  for (let i = 0; i < arr1.length; i++) {
    mySet.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    mySet.add(arr2[i]);
  }

  let union = [];

  for (let item of mySet) {
    union.push(item);
  }

  return union;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let result = arrayUnion(arr1, arr2);
console.log(result);
