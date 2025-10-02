// Split a String in Balanced Strings (LC:1221)

let s = "RLRRLLRLRL";
let temp = 0;
let count = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "R") {
    temp++;
  } else if (s[i] === "L") {
    temp--;
  }
  if (temp === 0) {
    count++;
  }
}
console.log(count);

/*
let s = "RLRRLLRLRL";
let count = 0;
let R = 0;
let L = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "R") {
    R++;
  } else if(s[i]==="L") {
    L++;
  }
  if (R === L) {
    count++;
    R = 0;
    L = 0;
  }
}
console.log(count);
*/
