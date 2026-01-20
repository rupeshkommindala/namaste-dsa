// Split a String in Balanced Strings (LC:1221)

// Way-01 (TC:O(n), SC:O(1))
var balancedStringSplit = function (s) {
  let L = 0;
  let R = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      L++;
    } else if (s[i] === "R") {
      R++;
    }
    if (L === R) {
      count++;
      L = 0;
      R = 0;
    }
  }
  return count;
};

let s = "RLRRLLRLRL";
let res1 = balancedStringSplit(s);
console.log(res1);

// Way-02 (TC:O(n), SC:O(1))
var balancedStringSplit2 = function (s) {
  let count = 0;
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      temp++;
    } else if (s[i] === "R") {
      temp--;
    }
    if (temp === 0) {
      count++;
    }
  }
  return count;
};

let s2 = "RLRRRLLRLL";
let res2 = balancedStringSplit2(s2);
console.log(res2);
