// Two Sum (LC:1)

// Brute Force Solution (TC:O(n^2), SC:O(1))
var twoSum1 = function (arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

let nums1 = [2, 7, 11, 15];
let res1 = twoSum1(nums1, 9);
console.log(res1);

// Optimized Solution (TC:O(n), SC:O(n))
var twoSum2 = function (arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let pairToFind = target - arr[i];
    if (map[pairToFind] && map[pairToFind] != i) {
      return [i, map[pairToFind]];
    }
  }
};

let nums2 = [2, 7, 11, 15];
let res2 = twoSum2(nums2, 9);
console.log(res2);
