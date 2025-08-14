// Length of Last Word (LC:58)

// Also Not Recommended for Brute Force Approach

/*
let s = "   fly me   to   the moon  ";
s = s.trim();
s = s.split(" ");
console.log(s[s.length - 1].length);
*/

// My Solution

/*let length = s.length;
let count = 0;
for (let i = length - 1; i >= 0; i--) {
  if (s[i] === " " && count !== 0) {
    break;
  } else if (s[i] !== " ") {
    count++;
  }
}
console.log(count);
*/
let s = "   fly me   to   the moon  ";
let n = s.length - 1;
while (n >= 0) {
  if (s[n] === " ") {
    n--;
  } else {
    break;
  }
}
let count = 0;
while (n >= 0) {
  if (s[n] !== " ") {
    count++;
    n--;
  } else {
    break;
  }
}
console.log(count);
