function NegativeIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log(arr[i]);
    }
  }
}

let arr = [1, -4, 9, -5, 15, -6];
NegativeIntegers(arr);
