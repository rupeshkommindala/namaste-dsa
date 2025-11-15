// Single Element in a Sorted Array (LC:540)

// Brute Force Approach (TC:O(n) SC:O(n))

var singleNonDuplicate = function (arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) {
      return arr[i];
    }
  }
};

// Optimal Approach (TC:O(logn) SC:O(1))

var singleNonDuplicate = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    // Pair exists on left side
    if (arr[m] === arr[m - 1]) {
      leftCount = m - 1 - l;
      if (leftCount % 2 === 1) {
        r = m - 2;
      } else {
        l = m + 1;
      }
    }
    // Pair exists on right side
    else if (arr[m] === arr[m + 1]) {
      leftCount = m - l;
      if (leftCount % 2 === 1) {
        r = m - 1;
      } else {
        l = m + 2;
      }
    } else {
      return arr[m];
    }
  }
};

// Brute Force Approach (TC:O(n) SC:O(1))

var singleNonDuplicate = function (arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }
  return ans;
};
