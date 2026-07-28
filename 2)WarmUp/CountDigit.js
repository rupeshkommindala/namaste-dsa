// Write a function that returns the count of digits in a number

// (TC:O(d) where d = number of digits, SC:O(1))
var countDigit = function (n) {
  if (n === 0) {
    return 1;
  }
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

let num = 259;
let res = countDigit(num);
console.log(res);
