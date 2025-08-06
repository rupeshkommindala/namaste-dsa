function LargestOddNumberString(num) {
  let n = num.length;
  while (n >= 0) {
    if (Number(num[n]) % 2 === 1) {
      return num.substring(0, n + 1);
    }
    n--;
  }
  return "";
}

let num = "35427";
let result = LargestOddNumberString(num);
console.log(result);
