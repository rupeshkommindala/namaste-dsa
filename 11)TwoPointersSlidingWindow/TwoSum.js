// Two Sum (LC:1)

// Way-01 (TC:O(n^2) SC:O(1))
var twoSum = function (arr, target) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

// Way-012 (TC:O(n) SC:O(n))
var twoSum = function (arr, target) {
  let n = arr.length;
  let map = {};
  for (let i = 0; i < n; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < n; i++) {
    let pairToFind = target - arr[i];
    if (map[pairToFind] && map[pairToFind] != i) {
      return [i, map[pairToFind]];
    }
  }
};
