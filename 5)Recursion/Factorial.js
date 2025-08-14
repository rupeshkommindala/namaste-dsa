// Factorial of a given Number using Recursion

function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}

let number = 5;
let result = fact(number);
console.log(result);
