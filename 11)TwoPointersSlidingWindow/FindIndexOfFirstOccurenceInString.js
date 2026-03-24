// Find the Index of the First Occurence in a String (LC:28)

// Brute Force Solution (TC:O(n*m), SC:O(1)
var strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    for (j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === m) {
      return i;
    }
  }
  return -1;
};

let haystack = "sadbutsad";
let needle = "but";
let res = strStr(haystack, needle);
console.log(res);
