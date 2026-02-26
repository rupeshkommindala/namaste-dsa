// Max Consecutive Ones (LC:485)

// (Way-01) Optimized Solution (TC:O(n), SC:O(1))
var findMaxConsecutiveOnes1 = function (nums) {
  let currCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
    } else {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }
  return Math.max(currCount, maxCount);
};

let nums1 = [1, 1, 0, 1, 1, 1];
let res1 = findMaxConsecutiveOnes1(nums1);
console.log(res1);

// (Way-02) (Enhancement) (TC:O(n), SC:O(1))
var findMaxConsecutiveOnes2 = function (nums) {
  let currCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
      maxCount = Math.max(currCount, maxCount);
    } else {
      currCount = 0;
    }
  }
  return maxCount;
};

let nums2 = [1, 0, 1, 1, 0, 1];
let res2 = findMaxConsecutiveOnes2(nums2);
console.log(res2);
