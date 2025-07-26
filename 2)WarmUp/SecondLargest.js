// Find the second largest in an Array

function secondLargestNumber(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr = [10,20,20];
let res = secondLargestNumber(arr);
console.log(res);
