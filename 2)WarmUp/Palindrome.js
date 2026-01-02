// Palindrome Number (LC:9)

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }
  if (rev === xCopy) {
    return true;
  } else {
    return false;
  }
};
let num = 1221;
let res = isPalindrome(num);
console.log(res);
