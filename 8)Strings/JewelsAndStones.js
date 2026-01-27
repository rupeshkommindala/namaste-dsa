// Jewels and Stones (LC:771)

// Optimized Solution (TC: O(m+n), SC:O(1)) m->Length of jewels, n->Length of stones
var numJewelsInStones1 = function (jewels, stones) {
  let jSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) {
      count++;
    }
  }
  return count;
};

let res1 = numJewelsInStones1("aA", "aAAAbbbb");
console.log(res1);

// Brute Force Solution (TC: O(m*n), SC:O(1)) m->Length of jewels, n->Length of stones
var numJewelsInStones2 = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
};

let res2 = numJewelsInStones2("z", "ZZ");
console.log(res2);

// Not Recommended (Don't use built in method(includes))
var numJewelsInStones3 = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
};

let res3 = numJewelsInStones3("aA", "aAAaAbbbb");
console.log(res3);
