// Sum of all Odd numbers in an array using Recursion

function sumOfOdd(n) {
  let isOdd = arr[n] % 2 === 1;
  if (n === 0) {
    if (isOdd) {
      return arr[n];
    } else {
      return 0;
    }
  }
  if (isOdd) {
    return arr[n] + sumOfOdd(n - 1);
  } else {
    return 0 + sumOfOdd(n - 1);
  }
}

let arr = [5, 0, 3, 4, 2, 6, 1];
let result = sumOfOdd(arr.length - 1);
console.log(result);

/*function sumOfOdd(n) {
  let isOdd = arr[n] % 2 === 1;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }

  return (isOdd ? arr[n] : 0) + sumOfOdd(n - 1);
}

let arr = [5, 0, 3, 4, 2, 6, 1];
let result = sumOfOdd(arr.length - 1);
console.log(result);*/
