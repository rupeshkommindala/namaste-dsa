// Two Sum II - Input Array Is Sorted (LC:167)

// Optimized Solution (TC:O(n), SC:O(1))
var twoSum = function (arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
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
let target = 26;
let res = twoSum(nums, target);
console.log(res);
