function Smallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let arr = [1, -5, -20, 45, 90, 5, 78];
let result = Smallest(arr);
console.log(result);
