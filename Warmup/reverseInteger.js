// Reverse Integer (LC:7)

function ReverseInteger(n) {
  n = Math.abs(n);
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  return rev;
}

let number = -12345;
let res = ReverseInteger(number);
let limit = Math.pow(2, 31);
if (res < -limit || res > limit - 1) {
  console.log(0);
}
if (number < 0) {
  console.log(-res);
} else {
  console.log(res);
}
