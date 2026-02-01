// Peak Index in a Mountain Array (LC:852)

// Optimized Solution (TC:O(logn), SC:O(1))
var peakIndexInMountainArray1 = function (arr) {
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

let arr1 = [0, 2, 1, 0];
let res1 = peakIndexInMountainArray1(arr1);
console.log(res1);

// Better Approach (TC:O(n), SC:O(1))
var peakIndexInMountainArray2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1]) {
      return i - 1;
    }
  }
};

let nums2 = [0, 10, 5, 2];
let res2 = peakIndexInMountainArray2(nums2);
console.log(res2);

// Brute Force Solution (TC:O(n), SC:O(1))
var peakIndexInMountainArray3 = function (arr) {
  let maximum = -Infinity;
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
      index = i;
    }
  }
  return index;
};

let nums3 = [0, 1, 0];
let res3 = peakIndexInMountainArray3(nums3);
console.log(res3);
