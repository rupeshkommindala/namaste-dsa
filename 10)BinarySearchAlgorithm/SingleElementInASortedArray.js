// Single Element in a Sorted Array (LC:540)

// Approach-1 TC:O(n)
let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let n = arr.length;
for (let i = 1; i < n - 1; i++) {
  if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
    console.log(arr[i]);
  }
}
