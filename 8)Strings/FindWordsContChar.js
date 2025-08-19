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

/*let words = ["leet", "code"];
let x = "e";
let res = [];
for (let i = 0; i < words.length; i++) {
  for(let j=0;j<words[i].length;j++){
    if(words[i][j]===x){
        res.push(i);
        break;    
    }
  }
}
console.log(res);
*/
