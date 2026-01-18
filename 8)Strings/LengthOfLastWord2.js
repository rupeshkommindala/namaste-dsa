// Length of Last Word (LC:58)

// Optimized Solution (TC: O(n), SC:O(1))
var lengthOfLastWord = function (s) {
  let count = 0;
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0 && s[n] === " ") {
      break;
    }
    n--;
  }
  return count;
};

let s = "  fly me   to   the moon";
let res = lengthOfLastWord(s);
console.log(res);
