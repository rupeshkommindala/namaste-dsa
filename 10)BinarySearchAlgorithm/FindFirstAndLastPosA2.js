// Find First and Last Position of Element in Sorted Array (LC:34)

// Optimized Solution (TC:O(logn), SC:O(1))
var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      ans[0] = m;
      r = m - 1;
    }
  }
  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      ans[1] = m;
      l = m + 1;
    }
  }
  return ans;
};

let arr = [5, 7, 7, 8, 8, 10];
let res = searchRange(arr, 8);
console.log(res);
