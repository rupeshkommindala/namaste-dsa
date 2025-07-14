// Given an array of integers every element appears twice except one find that one(LC:136)
// Optimized Approach
let arr = [1, 2, 3, 3, 4, 4, 5, 2, 1];
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans = ans ^ arr[i];
}
console.log(ans);

// Brute Force Approach

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
    console.log(nums[i]);
  }
}
