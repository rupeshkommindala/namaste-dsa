// Find Most Frequent Vowel and Consonant (LC:3541)

let s = "successes";
let hash = {};
for (let i = 0; i < s.length; i++) {
  if (!hash[s[i]]) {
    hash[s[i]] = 1;
  } else {
    hash[s[i]]++;
  }
}

let vowel = 0;
let consonant = 0;

let mapKeys = Object.keys(hash);

for (let i = 0; i < mapKeys.length; i++) {
  if (
    mapKeys[i] === "a" ||
    mapKeys[i] === "e" ||
    mapKeys[i] === "i" ||
    mapKeys[i] === "o" ||
    mapKeys[i] === "u"
  ) {
    vowel = Math.max(vowel, hash[mapKeys[i]]);
  } else {
    consonant = Math.max(consonant, hash[mapKeys[i]]);
  }
}
console.log(vowel + consonant);
