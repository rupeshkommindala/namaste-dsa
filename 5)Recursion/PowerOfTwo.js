// Power of Two (LC:231)

var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 === 1) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};

let num = 32;
let res = isPowerOfTwo(num);
console.log(res);
