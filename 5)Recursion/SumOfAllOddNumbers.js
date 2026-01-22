// Sum of all Odd numbers in an Array using Recursion

var sum = function (n) {
  let isOdd = arr[n] % 2 == 1;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sum(n - 1);
};

let arr = [5, 6, 2, 0, 1];
let res = sum(arr.length - 1);
console.log(res);
