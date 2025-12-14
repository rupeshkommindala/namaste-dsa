// Max Consecutive Ones (LC:485)

let nums = [1, 1, 0, 1, 1, 1];
let currentCount = 0;
let maximumCount = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 1) {
    currentCount++;
  } else {
    if (currentCount > maximumCount) {
      maximumCount = currentCount;
    }
    currentCount = 0;
  }
}
if (currentCount > maximumCount) {
  maximumCount = currentCount;
}
console.log(maximumCount);
