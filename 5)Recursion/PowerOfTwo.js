// Power of Two (LC:231)

// (TC:O(logn), SC:O(logn) Recursion stack)
var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  } else if (n % 2 === 1 || n < 1) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};

let num = 32;
let res = isPowerOfTwo(num);
console.log(res);
