// Find Minimum in Rotated Sorted Array (LC:153)

function findMin(arr) {
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
}

let arr = [3, 4, 5, 1, 2];
let res = findMin(arr);
console.log(res);
