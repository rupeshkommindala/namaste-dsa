// Find Most Frequent Vowel and Consonant (LC:3541)

// Way-01 (TC: O(n), SC:O(1))
var maxFreqSum1 = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;

  let mapKeys = Object.keys(map);
  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
      maxVowel = Math.max(maxVowel, map[mapKeys[i]]);
    } else {
      maxConsonant = Math.max(maxConsonant, map[mapKeys[i]]);
    }
  }
  return maxVowel + maxConsonant;
};

let string = "aeiaeia";
let res1 = maxFreqSum1(string);
console.log(res1);

// Way-02 (TC: O(n), SC:O(1))
var maxFreqSum2 = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (map[s[i]] > maxVowel) {
        maxVowel = map[s[i]];
      }
    } else {
      if (map[s[i]] > maxConsonant) {
        maxConsonant = map[s[i]];
      }
    }
  }
  return maxVowel + maxConsonant;
};

let s = "successes";
let res2 = maxFreqSum2(s);
console.log(res2);
