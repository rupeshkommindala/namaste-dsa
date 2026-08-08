// Reverse String (LC:344)

// (TC:O(n), SC:O(1))
var reverseString = function (s) {
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = temp;
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"];
let res = reverseString(s);
console.log(res);
