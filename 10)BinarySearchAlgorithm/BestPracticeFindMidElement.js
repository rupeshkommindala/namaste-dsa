// It can lead to Overflow;
let l = 2;
let r = 6;
let m = Math.floor((l + r) / 2);
console.log(m);

// Never Overflow;
let mid = l + Math.floor((r - l) / 2);
console.log(mid);
