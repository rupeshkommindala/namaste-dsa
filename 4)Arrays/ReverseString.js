// Reverse String (LC:344)

// (TC:O(n), SC:O(1))
var reverseString = function (s) {
  let n = s.length;
  let halfLen = Math.floor(n / 2);
  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = temp;
  }
  return s;
};

let s = ["R", "u", "p", "e", "s", "h"];
let res = reverseString(s);
console.log(res);
