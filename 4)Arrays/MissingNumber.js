// Find the Missing Number (LC:268)

let nums = [3, 0, 1];
let n = nums.length;
let totalSum = (n * (n + 1)) / 2;
let calculatedSum = 0;
for (let i = 0; i < n; i++) {
  calculatedSum = calculatedSum + nums[i];
}
console.log(totalSum - calculatedSum);
