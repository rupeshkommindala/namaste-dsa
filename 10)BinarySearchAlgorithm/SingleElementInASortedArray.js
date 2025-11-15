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
