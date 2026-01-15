// Move Zeroes (LC:283)

// Optimized Solution (TC:O(n), SC:O(1))
var moveZeroes1 = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

let nums1 = [0, 1, 0, 3, 12];
let res1 = moveZeroes1(nums1);
console.log(res1);

// Brute Force Solution (TC:O(n), SC:O(n))
var moveZeroes2 = function (nums) {
  let res = [];
  let n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      res.push(nums[i]);
      count++;
    }
  }
  for (let i = 0; i < n - count; i++) {
    res.push(0);
  }
  for (let i = 0; i < n; i++) {
    nums[i] = res[i];
  }
  return nums;
};

let nums2 = [0, 1, 0, 3, 12];
let res2 = moveZeroes2(nums2);
console.log(res2);
