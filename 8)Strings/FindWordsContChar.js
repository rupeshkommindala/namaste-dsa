// Find Words Containing Character (LC:2942)

let words = ["leet", "code"];
let x = "e";
let res = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].includes(x)) {
    res.push(i);
  }
}
console.log(res);
