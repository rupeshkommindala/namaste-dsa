// Two Sum (LC:1)

// Brute Force Solution (TC:O(n^2), SC:O(1))
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

let nums1 = [2, 7, 11, 15];
let res1 = twoSum1(nums1, 26);
console.log(res1);

// Optimized Solution (TC:O(n), SC:O(n))
var twoSum2 = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let pairToFind = target - nums[i];
    if (map[pairToFind] && map[pairToFind] !== i) {
      return [i, map[pairToFind]];
    }
  }
};

let nums2 = [2, 7, 11, 15];
let res2 = twoSum2(nums2, 26);
console.log(res2);
