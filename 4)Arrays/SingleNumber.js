// Single Number (LC:136)

// Optimized Solution (TC:O(n), SC:O(1))
var singleNumber1 = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }
  return ans;
};

let nums1 = [2, 2, 1, 3, 3];
let res1 = singleNumber1(nums1);
console.log(res1);

// Brute Force Solution (TC:O(n), SC:O(n))
var singleNumber2 = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === 1) {
      return nums[i];
    }
  }
};

let nums2 = [2, 2, 1, 1, 3, 3, 4, 4, 5];
let res2 = singleNumber2(nums2);
console.log(res2);
