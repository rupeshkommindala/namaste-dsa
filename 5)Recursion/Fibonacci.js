// Fibonacci Number using Recursion (LC:509)

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

let result = fib(4);
console.log(result);
