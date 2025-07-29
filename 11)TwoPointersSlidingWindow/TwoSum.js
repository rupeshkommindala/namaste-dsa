// Two Sum (LC:1)
// Brute Force Approach TC:O(n^2) SC:O(1)
let arr = [2, 7, 3, 15, 11];
let target = 26;

let n = arr.length;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    let sum = arr[i] + arr[j];
    if (sum === target) {
      //console.log([i, j]);
    }
  }
}

// Optimized Approach TC:O(n) SC:O(n)
let nums = [2, 7, 3, 15, 11];
let targ = 9;
let map = {};
for (let i = 0; i < nums.length; i++) {
  map[nums[i]] = i;
}

for (let i = 0; i < nums.length; i++) {
  let pairToFind = targ - nums[i];
  if (map[pairToFind] && i != map[pairToFind]) {
    console.log([i, map[pairToFind]]);
  }
}
