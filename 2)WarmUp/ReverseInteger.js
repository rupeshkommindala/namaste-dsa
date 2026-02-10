// Reverse Integer (LC:7)

// (TC:O(d) where d = number of digits, SC:O(1))
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
  return xCopy < 0 ? -rev : rev;
};

let num = -123;
let res = reverse(num);
console.log(res);
