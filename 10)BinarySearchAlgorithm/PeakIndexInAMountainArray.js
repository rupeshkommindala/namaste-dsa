// Peak Index in a Mountain Array (LC:852)

function peakIndexInMountainArray(arr) {
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
  return l; // return l or r
}

let arr = [0, 1, 0];
let res = peakIndexInMountainArray(arr);
console.log(res);

// Brute Force Approach (HW)

var peakIndexInMountainArray = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return i;
    }
  }
};

let nums = [0, 10, 5, 2];
let result = peakIndexInMountainArray(nums);
console.log(result);
