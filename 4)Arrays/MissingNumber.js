// Missing Number (LC:268)

// (Way-01) Optimized Solution (TC:O(n), SC:O(1))
var missingNumber1 = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum += nums[i];
  }
  return totalSum - partialSum;
};

let nums = [4, 0, 2, 1, 5];
let res = missingNumber1(nums);
console.log(res);

// (Way-02) Optimized Solution using XOR (TC:O(n), SC:O(1))
var missingNumber2 = function (nums) {
  let xor = nums.length;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i];
  }
  return xor;
};

let arr = [4, 0, 2, 1, 5];
let res2 = missingNumber2(arr);
console.log(res2);
