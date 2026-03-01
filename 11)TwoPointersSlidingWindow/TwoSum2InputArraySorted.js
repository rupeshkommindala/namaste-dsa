// Two Sum II - Input Array Is Sorted (LC:167)

// Optimized Solution (TC:O(n), SC:O(1))
var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
let res = twoSum(nums, target);
console.log(res);
