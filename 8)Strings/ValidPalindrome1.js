// Valid Palindrome (LC:125)

// (Way-01) Brute Force Solution (TC:O(n), SC:O(n))
var isPalindrome1 = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
      rev = s[i] + rev;
    }
  }
  return filteredString === rev;
};

let s1 = "A man, a plan, a canal: Panama";
let res1 = isPalindrome1(s1);
console.log(res1);

// (Way-02) Brute Force Solution (TC:O(n), SC:O(n))
var isPalindrome2 = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
    }
  }
  let rev = filteredString.split("").reverse().join("");
  return filteredString === rev;
};

let s2 = "race a car";
let res2 = isPalindrome2(s2);
console.log(res2);

// (Way-03) Brute Force Solution (TC:O(n), SC:O(n))
var isPalindrome3 = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= "a".charCodeAt() &&
        s[i].charCodeAt() <= "z".charCodeAt()) ||
      (s[i].charCodeAt() >= "0".charCodeAt() &&
        s[i].charCodeAt() <= "9".charCodeAt())
    ) {
      filteredString = filteredString + s[i];
      rev = s[i] + rev;
    }
  }
  return rev === filteredString;
};

let s3 = " ";
let res3 = isPalindrome3(s3);
console.log(res3);
