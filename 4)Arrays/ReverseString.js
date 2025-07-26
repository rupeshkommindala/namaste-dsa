// Reverse String (LC:344)

let arr = ["R", "u", "p", "e", "s", "h"];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = temp;
}
console.log(arr);
