// Binary Search (LC:704)

// Optimized Solution (TC:O(logn), SC:O(1))
var search = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === target) {
      return m;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
};

let arr = [-5, -1, 0, 3, 9];
let res = search(arr, 9);
console.log(res);
