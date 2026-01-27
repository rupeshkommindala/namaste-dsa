// Valid Anagram (LC:242)

// Brute Force Solution (TC:O(logn), SC:O(n)) Not Recommended (Don't use builtin methods)
var isAnagram1 = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(isAnagram1("rat", "car"));

// Optimized Solution (TC:O(n), SC:O(1))
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) {
      return false;
    } else {
      map[t[i]]--;
    }
  }
  return true;
};

let s = "anagram";
let t = "nagaram";
let res = isAnagram(s, t);
console.log(res);
