// Largest Odd Number in String (LC:1903)

function LargestOddNumberString(num) {
  let n = num.length - 1;
  while (n >= 0) {
    if (Number(num[n]) % 2 === 1) {
      return num.substring(0, n + 1);
    }
    n--;
  }
  return "";
}

let num = "3542";
let result = LargestOddNumberString(num);
console.log(result);

// function LargestOddNumberString(num) {
//   for (let i = num.length - 1; i >= 0; i--) {
//     if (Number(num[i]) % 2 === 1) {
//       return num.substring(0, i + 1);
//     }
//   }
//   return "";
// }

// let num = "354279";
// let result = LargestOddNumberString(num);
// console.log(result);
