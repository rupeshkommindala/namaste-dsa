// Reverse String II (LC:541)

let s = "abcdefghijklmnop";
let k = 2;
s = s.split("");
for (let x = 0; x < s.length; x = x + 2 * k) {
  for (let i = 0; i < Math.floor(k / 2); i++) {
    let temp = s[x + i];
    s[x + i] = s[x + k - i - 1];
    s[x + k - i - 1] = temp;
  }
}
console.log(s.join(""));
