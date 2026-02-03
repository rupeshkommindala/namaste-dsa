// First Bad Version (LC:278)

// Brute Force Solution (TC:O(n), SC:O(1)) (TLE)
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    for (let i = 1; i <= n; i++) {
      if (isBadVersion(i)) {
        return i;
      }
    }
  };
};

// (Way-01) Optimized Solution (TC:O(logn), SC:O(1))
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    while (l < r) {
      let m = l + Math.floor((r - l) / 2);
      if (!isBadVersion(m)) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return r; // return l also works
  };
};

// (Way-02) Optimized Solution (TC:O(logn), SC:O(1))
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    while (l < r) {
      let m = l + Math.floor((r - l) / 2);
      if (isBadVersion(m)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return l; // return r also works
  };
};
