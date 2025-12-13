// Sqrt(x) (LC:69)

let x = 100;

// Way-01 (Not Recommended)
console.log(Math.trunc(Math.pow(x, 0.5)));

// Way-02 (Not Recommended)
console.log(Math.trunc(x ** 0.5));

// Way-03 (TC:O(logn) Recommended)
function sqrt(x) {
  if (x < 2) {
    return x;
  }
  let l = 2;
  let r = Math.floor(x / 2);
  while (l <= r) {
    let m = Math.floor((l + r) / 2); // let m = l + Math.floor((r - l) / 2);
    if (m * m === x) {
      return m;
    } else if (m * m < x) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return r;
}

let n = 100;
let res = sqrt(n);
console.log(res);

// Way-04 (Using Linear Search TC:O(n) HW)
