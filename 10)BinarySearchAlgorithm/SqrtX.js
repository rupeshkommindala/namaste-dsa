// Sqrt(x) (LC:69)

let x = 100;
// Way-01 (Not Recommended)
console.log(Math.trunc(Math.pow(x, 0.5)));
// Way-02 (Not Recommended)
console.log(Math.trunc(x ** 0.5));
// Way-03

if(x<2){
    return x;
}
let left = 2;
let right = Math.floor(x / 2);
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (mid * mid === x) {
    return mid;
  } else if (mid * mid > x) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}
return Math.floor(right);
