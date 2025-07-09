/* Write a function that searches for an element
in an array and returns the indexedDB, if the 
element is not present then just return -1 */

function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 4, 7, 10, 15, 19, 23];
let result = searchElement(arr, 100);
console.log(result);
