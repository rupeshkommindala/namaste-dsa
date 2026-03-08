// Binary Search (LC:704)

// Optimized Solution (TC:O(logn), SC:O(1))
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
};

let arr = [5, 6, 15, 25, 32];
let res = search(arr, 25);
console.log(res);
