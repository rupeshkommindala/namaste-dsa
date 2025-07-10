// Palindrome Number (LC:9)

function palindrome(n) {
  if (n < 0) {
    return false;
  }
  let rev = 0;
  while (n > 0) {
    rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  return rev;
}

let num = 121;
let rev = palindrome(num);
if (rev === num) {
  console.log(true);
} else {
  console.log(false);
}
