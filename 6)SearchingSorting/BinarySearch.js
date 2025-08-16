// Find the index of a given number if not then return -1 using Binary Search (LC:704)
function BinarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr = [-1, 9, 11, 16, 19, 23, 56, 89, 90];
let result = BinarySearch(arr, 23);
console.log(result);
