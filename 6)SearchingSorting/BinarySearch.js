// Binary Search (LC:704)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let arr = [-1, 9, 11, 16, 19, 23, 56, 89, 90];
let result = binarySearch(arr, 9);
console.log(result);
