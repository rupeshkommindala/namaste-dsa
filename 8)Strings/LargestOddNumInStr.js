// Largest Odd Number in String (LC:1903)

let s = "3542";
let n=s.length-1;
while(n>=0){
    if(Number(s[n])%2===1){
        console.log(s.substring(0,n+1));
        return;
    }
    n--
}
console.log("");