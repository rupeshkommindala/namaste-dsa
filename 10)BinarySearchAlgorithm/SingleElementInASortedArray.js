// Single Element in a Sorted Array (LC:540)

// Brute Force Approach (TC:O(n), SC:O(n))
var singleNonDuplicate1 = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === 1) {
      return nums[i];
    }
  }
};

let nums1 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let res1 = singleNonDuplicate1(nums1);
console.log(res1);

// Better Approach (TC:O(n), SC:O(1))
var singleNonDuplicate2 = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }
  return ans;
};

let nums2 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let res2 = singleNonDuplicate2(nums2);
console.log(res2);

// Optimized Solution (TC:O(logn), SC:O(1))
var singleNonDuplicate3 = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (m % 2 === 1) {
      m--;
    }
    if (arr[m] === arr[m + 1]) {
      l = m + 2;
    } else {
      r = m;
    }
  }
  return arr[l];
};

let nums3 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let res3 = singleNonDuplicate3(nums3);
console.log(res3);
