// Find First and Last Position of Element in Sorted Array (LC:34)

// Brute Force Solution (TC:O(n), SC:O(1))
var searchRange1 = function (nums, target) {
  let ans = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      ans[0] = i;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      ans[1] = i;
      break;
    }
  }
  return ans;
};

let arr1 = [5, 7, 7, 8, 8, 10];
let res1 = searchRange1(arr1, 8);
console.log(res1);

// Optimized Solution (TC:O(logn), SC:O(1))
var searchRange2 = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (nums[r] === target) {
    ans[0] = r;
  }

  l = 0;
  r = nums.length - 1;
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  if (nums[l] === target) {
    ans[1] = l;
  }
  return ans;
};

let arr2 = [5, 7, 7, 8, 8, 10];
let res2 = searchRange2(arr2, 8);
console.log(res2);
