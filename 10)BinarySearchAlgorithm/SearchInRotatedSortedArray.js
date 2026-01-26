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
var search2 = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] === target) {
      return m;
    }
    if (arr[l] <= arr[m]) {
      if (target >= arr[l] && target < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > arr[m] && target <= arr[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};

let arr2 = [4, 5, 6, 7, 0, 1, 2];
let res2 = search2(arr2, 1);
console.log(res2);
