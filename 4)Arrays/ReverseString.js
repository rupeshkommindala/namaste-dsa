// Reverse String (LC:344)

var reverseString = function (s) {
  let length = s.length;
  let halfLen = Math.floor(length / 2);
  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[length - i - 1];
    s[length - i - 1] = temp;
  }
  return s;
};

let s = ["R", "u", "p", "e", "s", "h"];
let res = reverseString(s);
console.log(res);
