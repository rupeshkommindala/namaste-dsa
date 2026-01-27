// Find Words Containing Character (LC:2942)

// Optimized Solution (TC: O(n*m), SC:O(1)) (m->length of words, n->max length of each word)
var findWordsContaining = function (words, x) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        ans.push(i);
        break;
      }
    }
  }
  return ans;
};

let res1 = findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
console.log(res1);

// Not Recommended (Don't use built in method (includes))
var findWordsContainingChar = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    // Check if char x is present in words[i]
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
};

let res2 = findWordsContainingChar(["leet", "code"], "e");
console.log(res2);
