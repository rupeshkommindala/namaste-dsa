// Sum of First N Numbers using Recursion

function sum(n) {
  if (n === 0) {
    return 0;
  }
  return n + sum(n - 1);
}

let res = sum(5);
console.log(res);
