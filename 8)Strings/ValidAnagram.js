let s = "rat";
let t = "car";

if (s.length !== t.length) {
  console.log(false);
  return;
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
    console.log(false);
    return;
  } else {
    map[t[i]]--;
  }
}
console.log(true);
