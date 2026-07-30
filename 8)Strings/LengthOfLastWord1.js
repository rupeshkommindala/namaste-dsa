// Length of Last Word (LC:58)

// Brute Force Solution (TC:O(n), SC:O(n))
var lengthOfLastWord1 = function (s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
};

let res1 = lengthOfLastWord1("Hello  World  ");
console.log(res1);

// Optimized Solution (Way-01) (TC:O(n), SC:O(1))
var lengthOfLastWord2 = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      n--;
    } else {
      break;
    }
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
      n--;
    } else {
      break;
    }
  }
  return count;
};

let res2 = lengthOfLastWord2("Hello  World  ");
console.log(res2);

// Optimized Solution (Way-02) (TC:O(n), SC:O(1))
var lengthOfLastWord3 = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] !== " ") {
      break;
    } else {
      n--;
    }
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] === " ") {
      break;
    } else {
      count++;
      n--;
    }
  }
  return count;
};

let res3 = lengthOfLastWord3("Hello  World  ");
console.log(res3);
