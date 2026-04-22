function countingSort(arr) {
  let max = Math.max(...arr);

  let count = new Array(max + 1).fill(0);

  for (let x of arr) {
    count[x]++;
  }

  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index] = i;
      index++;
      count[i]--;
    }
  }

  return arr;
}

let nums = [4, 2, 5, 3, 3, 2, 1, 4];
console.log(countingSort(nums));
