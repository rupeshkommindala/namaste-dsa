// Remove Element (LC:27)

// (TC:O(n), SC:O(1))
var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
let res = removeElement(nums, val);
console.log(res);

// (TC:O(n), SC:O(1))
var removeElement2 = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (x != i) {
        nums[x] = nums[i];
      }
      x++;
    }
  }
  return x;
};

console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2));
