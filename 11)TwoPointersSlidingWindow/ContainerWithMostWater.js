// Container With Most Water (LC:11)

// Brute Force Solution (TC:O(n^2), SC:O(1)) (Time Limit Exceeded)
var maxArea1 = function (arr) {
  let maxWater = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let area = Math.min(arr[i], arr[j]) * (j - i);
      maxWater = Math.max(area, maxWater);
    }
  }
  return maxWater;
};

let area1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let res1 = maxArea1(area1);
console.log(res1);

// Optimized Solution (TC:O(n), SC:O(1))
var maxArea2 = function (arr) {
  let i = 0;
  let j = arr.length - 1;
  let maxWater = 0;
  while (i < j) {
    let area = Math.min(arr[i], arr[j]) * (j - i);
    maxWater = Math.max(area, maxWater);
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxWater;
};

let area2 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let res2 = maxArea2(area2);
console.log(res2);
