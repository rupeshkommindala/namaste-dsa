// Max Consecutive Ones (LC:485)

let nums = [1, 1, 0, 1, 1, 1];
let currCount = 0;
let maxCount = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 1) {
    currCount++;
  } else if (nums[i] === 0) {
    if (currCount > maxCount) {
      maxCount = currCount;
    }
    currCount = 0;
  }
}
if (currCount > maxCount) {
  maxCount = currCount;
}
console.log(maxCount);
