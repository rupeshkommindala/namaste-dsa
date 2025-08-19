// Jewels and Stones (LC:771)

let jewels = "aA";
let stones = "aAAbbbb";
let jSet = new Set();
let count = 0;
for (let i = 0; i < jewels.length; i++) {
  jSet.add(jewels[i]);
}
for (let i = 0; i < stones.length; i++) {
  if (jSet.has(stones[i])) {
    count++;
  }
}
console.log(count);

/*let jewels = "aA";
let stones = "aAAbbbb";
let count = 0;
for (let i = 0; i < stones.length; i++) {
  if (jewels.includes(stones[i])) {
    count++;
  }
}
console.log(count);
*/

/*
let jewels = "aA";
let stones = "aAAbbbb";
let count = 0;
for (let i = 0; i < stones.length; i++) {
  for (let j = 0; j < jewels.length; j++) {
    if (jewels[j] === stones[i]) {
      count++;
      break;
    }
  }
}
console.log(count);
*/
