// Find K Closest Elements (LC:658)

// Optimized Solution (TC:O(logn), SC:O(1))
var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - k;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m + k] - x < x - arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return arr.slice(l, l + k);
};

let arr = [1, 2, 3, 4, 5];
let k = 4;
let x = 3;
let res = findClosestElements(arr, k, x);
console.log(res);
