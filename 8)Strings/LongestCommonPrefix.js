// Longest Common Prefix (LC:14)

function LongestCommonPrefix(strs) {
  let x = 0;
  while (x < strs[0].length) {
    let ch = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (ch !== strs[i][x] || x === strs[i].length) {
        return strs[0].substring(0, x);
      }
    }
    x++;
  }
  return strs[0];
}

let strs = ["flower", "flow", "flight"];
let res = LongestCommonPrefix(strs);
console.log(res);
