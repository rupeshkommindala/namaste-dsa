// Search in Rotated Sorted Array (LC:33)

// Brute Force Solution (TC:O(n), SC:O(1))
var search1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

let arr1 = [4, 5, 6, 7, 0, 1, 2];
let res1 = search1(arr1, 0);
console.log(res1);

// Optimized Solution (TC:O(logn), SC:O(1))
var search2 = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      return m;
    } else if (nums[l] <= nums[m]) {
      if (target >= nums[l] && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > nums[m] && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};

let arr2 = [4, 5, 6, 7, 0, 1, 2];
let res2 = search2(arr2, 0);
console.log(res2);
