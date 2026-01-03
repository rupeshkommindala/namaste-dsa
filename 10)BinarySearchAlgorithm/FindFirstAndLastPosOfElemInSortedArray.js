// Find First and Last Position of Element in Sorted Array (LC:34)

var searchRange = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let ans = [-1, -1];
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < target) l = m + 1;
    else r = m;
  }
  if (arr[r] === target) ans[0] = r;

  l = 0;
  r = arr.length - 1;
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (arr[m] > target) r = m - 1;
    else l = m;
  }
  if (arr[l] === target) ans[1] = l;

  return ans;
};

let arr = [1, 2, 3, 3, 3, 3, 4, 4, 5];
let res = searchRange(arr, 3);
console.log(res);
