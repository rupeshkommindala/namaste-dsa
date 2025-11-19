// Write a function that returns the count of digits in a number

function countDigit(n) {
  if (n === 0) {
    return 1;
  }
  // Converting Negative Number to a Positive Number
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let number = -150;
let res = countDigit(number);
console.log(res);
