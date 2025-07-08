// Find the index of a given number if not then return -1
function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 3, 6, 9, 11, 19];
let result = LinearSearch(arr, 91);
console.log(result);
