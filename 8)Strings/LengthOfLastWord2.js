// Length of Last Word (LC:58)

let s = "   fly me   to   the moon";
let n = s.length - 1;
let count = 0;
while (n >= 0) {
  if (s[n] !== " ") {
    count++;
  } else if (s[n] === " " && count > 0) {
    break;
  }
  n--;
}
console.log(count);
