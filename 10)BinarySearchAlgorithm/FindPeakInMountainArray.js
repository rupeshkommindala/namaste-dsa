// Using Linear Search TC:0(n)
let arr = [0, 2, 5, 7, 10, 6, 3];
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] < arr[i]) {
    console.log(arr[i]);
    break;
  }
}
