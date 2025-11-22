// Find Peak Element (LC:162)

function findPeakElement(arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m + 1] > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
}

let arr = [1, 2, 1, 3, 5, 6, 4];
let res = findPeakElement(arr);
console.log(res);
