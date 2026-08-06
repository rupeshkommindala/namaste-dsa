// Group Anagrams (LC:49)

// Brute Force Solution (TC:O(n*mlogm), SC:O(n*m))
var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");
    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]];
    } else {
      map[sortedStr].push(strs[i]);
    }
  }
  return [...Object.values(map)];
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let res = groupAnagrams(strs);
console.log(res);
