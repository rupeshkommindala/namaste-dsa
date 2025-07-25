// Power of Two (LC:231)
var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};
