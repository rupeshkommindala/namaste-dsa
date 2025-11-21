// Sum of First N Numbers using Recursion

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

let res = sum(5);
console.log(res);
