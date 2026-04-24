function countingSortStable(arr) {
  let max = Math.max(...arr);

  let count = new Array(max + 1).fill(0);
  for (let x of arr) {
    count[x]++;
  }

  let prefix = new Array(max + 1).fill(0);
  prefix[0] = count[0];
  for (let i = 1; i < count.length; i++) {
    prefix[i] = count[i] + prefix[i - 1];
  }
  let sortedArr = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    let x = prefix[curr];
    sortedArr[x - 1] = curr;
    prefix[curr]--;
  }
  return sortedArr;
}

let nums = [4, 2, 5, 3, 3, 2, 1, 4];
console.log(countingSortStable(nums));
