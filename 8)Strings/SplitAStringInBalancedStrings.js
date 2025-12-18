// Split a String in Balanced Strings (LC:1221)

// Way-01 TC:O(n) SC:O(1)

let s = "RLRRLLRLRL";
let temp = 0;
let count = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "R") {
    temp++;
  } else {
    temp--;
  }
  if (temp === 0) {
    count++;
  }
}
console.log(count);

// Way-02 TC:O(n) SC:O(1)

let string = "RLRRLLRLRL";
let counter = 0;
let R = 0;
let L = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === "R") {
    R++;
  } else {
    L++;
  }
  if (R === L) {
    counter++;
    R = 0;
    L = 0;
  }
}
console.log(counter);
