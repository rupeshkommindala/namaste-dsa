// Palindrome Number (LC:9)

function palindrome(x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }
  if (xCopy === rev) {
    return true;
  } else {
    return false;
  }
  //return xCopy === rev;
}
let num = 12215;
let res = palindrome(num);
console.log(res);
