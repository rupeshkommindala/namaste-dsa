// Given an array of integers every element appears twice except one find that one(LC:136)

// Optimized Approach (TC:O(n) SC:O(1))
let arr = [1, 2, 2, 3, 1];
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans = ans ^ arr[i];
}
console.log(ans);

// Brute Force Approach (TC:O(n) SC:O(n))
let nums = [4, 1, 2, 1, 2];
let hash = {};
for (let i = 0; i < nums.length; i++) {
  if (!hash[nums[i]]) {
    hash[nums[i]] = 1;
  } else {
    hash[nums[i]]++;
  }
}
for (let i = 0; i < nums.length; i++) {
  if (hash[nums[i]] === 1) {
    //console.log(nums[i]);
  }
}
