// Sum of all elements in an Array using Recursion

// (TC:O(n), SC:O(n) Recursion stack)
var sum = function (n) {
  if (n === 0) {
    return arr[n];
  }
  return arr[n] + sum(n - 1);
};

let arr = [4, 9, 1, 0, 2];
let res = sum(arr.length - 1);
console.log(res);
