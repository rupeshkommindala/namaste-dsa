// Factorial of a given number using Recursion

var fact = function (n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
};

let res = fact(5);
console.log(res);
