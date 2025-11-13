// Is Subsequence (LC:392)

let s = "abc";
let t = "ahbgdc";
let i = 0;
let j = 0;
while (j < t.length) {
  if (s[i] === t[j]) {
    i++;
  }
  j++;
}
console.log(i === s.length);
