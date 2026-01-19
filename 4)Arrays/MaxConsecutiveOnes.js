// Max Consecutive Ones (LC:485)

// Optimized Solution (TC:O(n), SC:O(1))
var findMaxConsecutiveOnes = function (nums) {
  let currCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
    } else if (nums[i] === 0) {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }
  return Math.max(currCount, maxCount);
};

let nums = [1, 1, 0, 1, 1, 1, 1];
let res = findMaxConsecutiveOnes(nums);
console.log(res);
