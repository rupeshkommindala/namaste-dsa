// Write a function that returns the count of digits in a number

// (TC:O(d) where d = number of digits, SC:O(1))
var countDigit = function (n) {
  n = Math.abs(n);
  if (n === 0) {
    return 1;
  }
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

let num = 123;
let res = countDigit(num);
console.log(res);
