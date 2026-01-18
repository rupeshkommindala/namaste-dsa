// Largest Odd Number in String (LC:1903)

// Optimized Solution (TC: O(n), SC:O(1))
var largestOddNumber = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (Number(s[n]) % 2 === 1) {
      return s.substring(0, n + 1);
    }
    n--;
  }
  return "";
};

let num = "3542";
let result = largestOddNumber(num);
console.log(result);
