// Sum of First N Numbers using Recursion

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

let number = 5;
let result = sum(number);
console.log(result);
