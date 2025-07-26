// Power of Two (LC:231)
function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
}

let number = isPowerOfTwo(4);
console.log(number);
