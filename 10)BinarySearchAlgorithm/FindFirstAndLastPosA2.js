// Find First and Last Position of Element in Sorted Array (LC:34)

// Optimized Solution (TC:O(logn), SC:O(1))
var searchRange = function (arr, target) {
  let ans = [-1, -1];
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] === target) {
      ans[0] = m;
      r = m - 1;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  l = 0;
  r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] === target) {
      ans[1] = m;
      l = m + 1;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return ans;
};

let arr = [5, 7, 7, 8, 8, 10];
let res = searchRange(arr, 8);
console.log(res);
