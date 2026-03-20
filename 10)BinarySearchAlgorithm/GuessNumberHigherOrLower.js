// Guess Number Higher or Lower (LC:374)

// Brute Force Solution (TC:O(n), SC:O(1)) (Time Limit Exceeded)
var guessNumber = function (n) {
  for (let i = 1; i <= n; i++) {
    if (guess(i) === 0) {
      return i;
    }
  }
};

// Optimized Solution (TC:O(logn), SC:O(1))
var guessNumber = function (n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    let res = guess(m);
    if (res === 0) {
      return m;
    } else if (res < 0) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};
