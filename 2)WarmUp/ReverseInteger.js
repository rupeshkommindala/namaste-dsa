// Reverse Integer (LC:7)

function ReverseInteger(x) {
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) {
    return 0;
  }
  return xCopy < 0 ? -rev : rev;
}

let number = 12345;
let res = ReverseInteger(number);
console.log(res);
