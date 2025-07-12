// Remove Element (LC:27)
let nums = [3, 2, 1, 5, 3, 4, 8, 3];
let val = 3;
let x = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] != val) {
    nums[x] = nums[i];
    x = x + 1;
  }
}
console.log(nums);
console.log(x);
