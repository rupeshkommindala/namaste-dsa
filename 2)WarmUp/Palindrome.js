// Palindrome Number (LC:9)

function palindrome(n) {
  if (n < 0) {
    return false;
  }
  let nCopy = n;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  /*
  if (nCopy === rev) {
    return true;
  } else {
    return false;
  }
  */
  return nCopy === rev;
}
let num = 1221;
let res = palindrome(num);
console.log(res);
