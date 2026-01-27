// Longest Common Prefix (LC:14)

// (TC:O(s), SC:O(1)) s->Sum of length of all the strings
var longestCommonPrefix = function (strs) {
  let x = 0;
  while (x < strs[0].length) {
    let char = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (char !== strs[i][x] || x == strs[i].length) {
        return strs[0].substring(0, x);
      }
    }
    x++;
  }
  return strs[0];
};

let strs = ["flower", "flow", "flight", "fly"];
let res = longestCommonPrefix(strs);
console.log(res);
