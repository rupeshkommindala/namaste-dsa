// Find the Index of the First Occurence in a String (LC:28)

// Brute Force Solution (TC:O(m*n), SC:O(1)
var strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  for (let i = 0; i < n - m + 1; i++) {
    let j = 0;
    for (j = 0; j < m; j++) {
      if (haystack[j + i] !== needle[j]) {
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
let needle = "sad";
let res = strStr(haystack, needle);
console.log(res);
