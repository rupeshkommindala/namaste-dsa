// Sum of all elements in an Array using Recursion

// (TC:O(n), SC:O(n) Recursion stack)
var sum = function (n) {
  if (n === 0) {
    return arr[n];
  }
  return arr[n] + sum(n - 1);
};

let arr = [10, 6, 2, 0, 4];
let res = sum(arr.length - 1);
console.log(res);
