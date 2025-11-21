// Sum of All Elements in an Array using Recursion

function sum(n) {
  if (n === 0) {
    return arr[n];
  }
  return arr[n] + sum(n - 1);
}

let arr = [5, 3, 2, 0, 1];
let result = sum(arr.length - 1);
console.log(result);
