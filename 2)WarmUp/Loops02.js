/* Write a function that searches for an element
in an array and returns the indexedDB, if the 
element is not present then just return -1 */

function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 4, 7, 10, 15, 19, 23];
let result = searchElement(arr, 100);
console.log(result);

// Write a function that returns negative numbers in an Array

function countNegative(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}

let array = [1, 2, -5, -4, 3, 20, 21, -59];
let countResult = countNegative(array);
console.log(countResult);

// Write a function that returns the largest number in an array

function largestNumber(nums) {
  let largest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}

let nums = [1, 4, 7, 9, 13, 18, 23, 49, 54];
let res = largestNumber(nums);
console.log(res);

// Write a function that returns the smallest number in an array

function largestNumber(nums2) {
  let smallest = Infinity;
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] < smallest) {
      smallest = nums2[i];
    }
  }
  return smallest;
}

let nums2 = [1, 4, 7, 9, 13, -200, 18, 23, 49, 54, -100];
let res2 = largestNumber(nums2);
console.log(res2);

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
let list = [10,20,20];
let value = secondLargestNumber(list);
console.log(value);