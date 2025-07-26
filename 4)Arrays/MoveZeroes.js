// Move Zeroes (LC:283)
let nums = [0, 1, 0, 3, 12];
let x = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] != 0) {
    let temp = nums[x];
    nums[x] = nums[i];
    nums[i] = temp;
    x = x + 1;
  }
}
console.log(nums);
