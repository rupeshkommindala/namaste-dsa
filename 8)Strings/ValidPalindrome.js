// Valid Palindrome (LC:125)

/*
let s = "A man, a plan, a canal: Panama";
s = s.toLowerCase();
let filteredString = "";
let rev = "";
for (let i = 0; i < s.length; i++) {
  if (s[i].match(/[a-z0-9]/i)) {
    filteredString = filteredString + s[i];
    rev = s[i] + rev;
  }
}

console.log(filteredString === rev);
*/

let s = "A man, a plan, a canal: Panama";
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
console.log(rev === filteredString);
