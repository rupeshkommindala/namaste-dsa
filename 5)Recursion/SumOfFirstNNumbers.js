// Sum of First N Numbers using Recursion

// (TC:O(n), SC:O(n) Recursion stack)
var sum = function (n) {
  if (n === 0) {
    return 0;
  }
  return n + sum(n - 1);
};

let num = 5;
let res = sum(num);
console.log(res);
