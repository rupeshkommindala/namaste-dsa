/**
 * This works perfectly fine in JavaScript, but in other
 * languages it will create a lot of issues.
 * It can lead to overflow in other languages not in JavaScript
 */

let l = 2;
let r = 6;
let m = Math.floor((l + r) / 2); // Big Integer + Big Integer can lead to overflow
console.log(m);

/**
 * This works perfectly fine in all the languages.
 * Never overflow
 */

let mid = l + Math.floor((r - l) / 2); // Big Integer - Big Integer never overflow
console.log(mid);
