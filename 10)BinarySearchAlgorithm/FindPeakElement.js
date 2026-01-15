// Find Peak Element (LC:162)

// Brute Force Solution (TC:O(n), SC:O(1))
var findPeakElement1 = function (arr) {
  let maximum = -Infinity;
  let index = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
      index = i;
    }
  }
  return index;
};

let arr1 = [1, 2, 3, 1];
let res1 = findPeakElement1(arr1);
console.log(res1);

// Optimized Solution (TC:O(logn), SC:O(1))
var findPeakElement2 = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m + 1] > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return r; // return l also works
};

let arr2 = [1, 2, 1, 3, 5, 6, 4];
let res2 = findPeakElement2(arr2);
console.log(res2);
