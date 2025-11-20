// Missing Number (LC:268)

// Optimal Approach (TC:O(n) SC:O(1))
let nums = [3, 0, 1, 2, 5];
let n = nums.length;
let totalSum = Math.floor((n * (n + 1)) / 2);
let calculatedSum = 0;
for (let i = 0; i < n; i++) {
  calculatedSum = calculatedSum + nums[i];
}
console.log(totalSum - calculatedSum);

// Try Brute Force Approach (HomeWork)
