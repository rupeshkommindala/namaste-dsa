// Sum of all Odd numbers in an Array using Recursion

// (TC:O(n), SC:O(n) Recursion stack)
var sum = function (n) {
  let isOdd = arr[n] % 2 === 1;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sum(n - 1);
};

let arr = [10, 7, 3, 0, 5];
let res = sum(arr.length - 1);
console.log(res);

// (TC:O(n), SC:O(n) Recursion stack)
var sum2 = function (n) {
  let isOdd = nums[n] % 2 === 1;
  if (n === 0) {
    if (isOdd) {
      return nums[n];
    } else {
      return 0;
    }
  }
  if (isOdd) {
    return nums[n] + sum2(n - 1);
  } else {
    return 0 + sum2(n - 1);
  }
};
let nums = [5, 6, 2, 0, 1];
console.log(sum2(nums.length - 1));
