function findPivotIndex(arr, startIndex, endIndex) {
  let pivot = arr[endIndex];
  let pos = startIndex - 1;

  // moving all smaller elements to the left
  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] < pivot) {
      pos++;
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
    }
  }

  // moving pivot to correct position
  [arr[pos + 1], arr[endIndex]] = [arr[endIndex], arr[pos + 1]];
  return pos + 1;
}

function quickSort(arr, startIndex, endIndex) {
  if (startIndex < endIndex) {
    let pivotIndex = findPivotIndex(arr, startIndex, endIndex);

    // calling quickSort for left part
    quickSort(arr, startIndex, pivotIndex - 1);

    // calling quickSort for right part
    quickSort(arr, pivotIndex + 1, endIndex);

    return arr;
  }
}

let nums = [8, 3, 1, 7, 0, 10, 2];
let startIndex = 0;
let endIndex = nums.length - 1;

console.log(quickSort(nums, startIndex, endIndex));
