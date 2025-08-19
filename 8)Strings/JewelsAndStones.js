// Jewels and Stones (LC:771)

let jewels = "aA";
let stones = "aAAbbbb";
let count = 0;
for (let i = 0; i < stones.length; i++) {
  if (jewels.includes(stones[i])) {
    count++;
  }
}
console.log(count);
