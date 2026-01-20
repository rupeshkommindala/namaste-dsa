// Sum of all elements in an Array using Recursion

var sum = function (n) {
  if (n === 0) {
    return arr[n];
  }
  return arr[n] + sum(n - 1);
};

let arr = [5, 3, 2, 0, 1];
let res = sum(arr.length - 1);
console.log(res);
