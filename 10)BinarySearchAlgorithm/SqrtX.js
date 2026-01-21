// Sqrt(x) (LC:69)

let x = 100;

// Way-01 (Not Recommended)
console.log(Math.floor(Math.pow(x, 0.5)));

// Way-02 (Not Recommended)
console.log(Math.trunc(x ** 0.5));

// Way-03 (TC:O(logn), SC:O(1)) (Recommended)
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  let l = 2;
  let r = Math.floor(x / 2);
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (m * m === x) {
      return m;
    } else if (m * m < x) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return r;
};

let n = 30;
let res = mySqrt(n);
console.log(res);

// Way-04 (TC:O(sqrt(x)), SC:O(1))
var mySqrt2 = function (x) {
  let ans = 0;
  for (let i = 0; i * i <= x; i++) {
    ans = i;
  }
  return ans;
};

console.log(mySqrt2(40));
