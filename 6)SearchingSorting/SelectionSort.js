// Selection Sort

// (TC:O(n^2), SC:O(1))
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return nums;
}

let nums = [5, 4, 3, 0, 2, 1];
let res = selectionSort(nums);
console.log(res);
