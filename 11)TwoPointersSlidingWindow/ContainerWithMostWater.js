// Container With Most Water (LC:11)

function maxArea(arr) {
  let i = 0;
  let j = arr.length - 1;
  let maxWater = 0;
  while (i < j) {
    let area = Math.min(arr[i], arr[j]) * (j - i);
    maxWater = Math.max(area, maxWater);
    if (arr[i] < arr[j]) i++;
    else j--;
  }
  return maxWater;
}
let arr = [1, 1];
let res = maxArea(arr);
console.log(res);
