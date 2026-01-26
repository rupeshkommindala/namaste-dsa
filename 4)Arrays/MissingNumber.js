// Missing Number (LC:268)

// Optimized Solution (TC:O(n), SC:O(1))
var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = Math.floor(n * (n + 1) / 2);
  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum += nums[i];
  }
  return totalSum - partialSum;
};

let nums = [3, 0, 1];
let res = missingNumber(nums);
console.log(res);
