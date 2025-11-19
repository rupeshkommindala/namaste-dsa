// Reverse Integer (LC:7)

function ReverseInteger(n) {
  let ncopy = n;
  n = Math.abs(n);
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) {
    return 0;
  }
  return ncopy < 0 ? -rev : rev;
}

let number = 12345;
let res = ReverseInteger(number);
console.log(res);
