// Search in Rotated Sorted Array (LC:33)

var search = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] === target) {
      return m;
    }
    // Left part is sorted
    if (arr[l] <= arr[m]) {
      if (target >= arr[l] && target < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > arr[m] && target <= arr[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};

let arr = [4, 5, 6, 7, 0, 1, 2];
let res = search(arr, 0);
console.log(res);
