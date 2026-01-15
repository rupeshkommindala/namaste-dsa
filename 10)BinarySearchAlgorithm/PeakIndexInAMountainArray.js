// Peak Index in a Mountain Array (LC:852)

// Optimized Solution (TC:O(logn), SC:O(1))
var peakIndexInMountainArray = function (arr) {
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

let arr = [0, 2, 1, 0];
let res = peakIndexInMountainArray(arr);
console.log(res);

// Better Approach (TC:O(n), SC:O(1))
var peakIndexInMountainArray = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return i;
    }
  }
};

let nums = [0, 10, 5, 2];
let result = peakIndexInMountainArray(nums);
console.log(result);

// Brute Force Solution (TC:O(n), SC:O(1))

var peakIndexInMountainArray = function (arr) {
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
