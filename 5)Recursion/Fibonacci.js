// Fibonacci Number (LC:509)

var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

let res = fib(4);
console.log(res);
