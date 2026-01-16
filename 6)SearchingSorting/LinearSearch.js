/*
  Find the index of a given number and return the index,
  if the element is not present then just return -1 using Linear Search.
*/

// Optimized Solution (TC:O(n), SC:O(1))
var linearSearch = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

let arr = [5, 10, 2, 0, 1];
let res = linearSearch(arr, 0);
console.log(res);
