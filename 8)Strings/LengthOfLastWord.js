// Length of Last Word (LC:58)

// Also Not Recommended for Brute Force Approach
let s = "   fly me   to   the moon  ";
s = s.trim();
s = s.split(" ");
console.log(s[s.length - 1].length);
