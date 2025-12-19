// Power of Two (LC:231)

function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 === 1) {
    return false;
  }
  return isPowerOfTwo(n / 2);
}

let res = isPowerOfTwo(16);
console.log(res);
