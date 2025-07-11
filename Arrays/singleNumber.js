//Given an array of integers every element appears twice except one find that one
let arr = [1, 2, 3, 3, 4, 2, 1];
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans = ans ^ arr[i];
}
console.log(ans);
