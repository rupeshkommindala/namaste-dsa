// Find the second largest number in an Array

// (TC:O(n), SC:O(1))
function secondLargestNumber(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

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

let arr = [5, 6, 2, 0, 1, 3];
let res = secondLargestNumber(arr);
console.log(res);
