// Reverse Integer (LC:7)

var reverse = function (x) {
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
  if (xCopy < 0) {
    return -rev;
  } else {
    return rev;
  }
};

let num = -123;
let res = reverse(num);
console.log(res);
