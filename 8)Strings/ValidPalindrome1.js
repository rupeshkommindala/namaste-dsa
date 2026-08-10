// Valid Palindrome (LC:125)

// (Way-01) Brute Force Solution (TC:O(n), SC:O(n))
var isPalindrome1 = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
      rev = s[i] + rev;
    }
  }
  return rev === filteredString;
};

let string1 = "A man, a plan, a canal: Panama";
let res1 = isPalindrome1(string1);
console.log(res1);

// (Way-02) Brute Force Solution (TC:O(n), SC:O(n))
var isPalindrome2 = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
    }
  }
  let rev = filteredString.split("").reverse().join("");
  return rev === filteredString;
};

let string2 = "A man, a plan, a canal: Panama";
let res2 = isPalindrome2(string2);
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
      filteredString += s[i];
      rev = s[i] + rev;
    }
  }
  return rev === filteredString;
};

let string3 = "A man, a plan, a canal: Panama";
let res3 = isPalindrome3(string3);
console.log(res3);
