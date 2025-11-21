/*
  Find the index of a given number and return the index,
  if the element is not present then just return -1 using Linear Search.
*/

function linearSearch(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 3, 6, 9, 11, 19];
let result = linearSearch(arr, 19);
console.log(result);
