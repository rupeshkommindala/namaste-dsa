// Find Peak Element (LC:162)

// Brute Force Solution (TC:O(n), SC:O(1))
var findPeakElement1 = function (nums) {
  let max = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }
  return index;
};

let arr1 = [1, 2, 1, 3, 5, 6, 4];
let res1 = findPeakElement1(arr1);
console.log(res1);

// Optimized Solution (TC:O(logn), SC:O(1))
var findPeakElement2 = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m + 1] > nums[m]) {
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
