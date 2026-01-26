// Sum of First N Numbers using Recursion

var sum = function (n) {
  if (n === 0) {
    return 0;
  }
  return n + sum(n - 1);
};

let num = 6;
let res = sum(num);
console.log(res);
