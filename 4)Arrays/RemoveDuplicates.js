// Remove Duplicates from Sorted Array (LC:26)

// (TC:O(n), SC:O(1))
var removeDuplicates = function (arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return x + 1;
};

let arr = [1, 1, 2];
let res = removeDuplicates(arr);
console.log(res);
console.log(arr);
