// Two Sum II - Input Array Is Sorted (LC:167)

var twoSum = function (arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};
