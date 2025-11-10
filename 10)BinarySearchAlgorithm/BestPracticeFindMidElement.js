// It can lead to Overflow;
let left = 2;
let right = 6;
let mid = Math.floor((left + right) / 2);
console.log(mid);

// Never Overflow;
let middle = left + Math.floor((right - left) / 2);
console.log(middle);
