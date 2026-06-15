// Sum of all Odd numbers in an Array using Recursion

// (TC:O(n), SC:O(n) Recursion stack)
var sum1 = function (n) {
  let isOdd = arr[n] % 2 === 1;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sum1(n - 1);
};

let arr = [4, 9, 1, 0, 2];
let res = sum1(arr.length - 1);
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
let nums = [4, 9, 1, 0, 2];
console.log(sum2(nums.length - 1));
