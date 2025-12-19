// Binary Search (LC:704)

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  // r >= l also works
  while (l <= r) {
    let m = Math.floor((l + r) / 2); // let m = l + Math.floor((r-l)/2);
    if (arr[m] === target) {
      return m;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}

let arr = [-1, 9, 11, 16, 19, 23, 56, 89, 90];
let result = binarySearch(arr, 9);
console.log(result);
