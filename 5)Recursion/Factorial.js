// Factorial of a given number using Recursion

// (TC:O(n), SC:O(n) call stack)
var fact = function (n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * fact(n - 1);
};

let num = 6;
let res = fact(num);
console.log(res);
