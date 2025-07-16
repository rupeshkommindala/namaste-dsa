let arr = [1, 10, -45, 46, 98, 93, 56];

function Largest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let result = Largest(arr);
console.log(result);
