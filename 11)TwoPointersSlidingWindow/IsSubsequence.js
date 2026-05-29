// Is Subsequence (LC:392)

// Optimized Solution (TC:O(n), SC:O(1))
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

let s = "abc";
let t = "ahbgdc";
let res = isSubsequence(s, t);
console.log(res);
