/*
  Find the index of a given number and return the index,
  if the element is not present then just return -1 using Linear Search.
*/

// (TC:O(n), SC:O(1))
var linearSearch = function (arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
};

let arr = [4, 9, 1, 0, 2];
let res = linearSearch(arr, 0);
console.log(res);
