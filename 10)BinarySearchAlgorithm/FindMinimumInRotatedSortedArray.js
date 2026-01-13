// Find Minimum in Rotated Sorted Array (LC:153)

// Brute Force Solution (TC:O(n), SC:O(1))
var findMin1 = function (arr) {
  let minimum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  return minimum;
};

let arr1 = [3, 4, 5, 1, 2];
let res1 = findMin1(arr1);
console.log(res1);

// Optimized Solution (TC:O(logn), SC:O(1))
var findMin2 = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (arr[l] <= arr[r]) {
      return arr[l];
    }
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < arr[m - 1]) {
      return arr[m];
    }
    if (arr[l] <= arr[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
};

let arr2 = [4, 5, 6, 7, 0, 1, 2];
let res2 = findMin1(arr2);
console.log(res2);
