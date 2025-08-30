let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let map = {};
for (let i = 0; i < strs.length; i++) {
  let sortedVal = strs[i].split("").sort().join("");
  if (!map[sortedVal]) {
    map[sortedVal] = [strs[i]];
  } else {
    map[sortedVal].push(strs[i]);
  }
}

console.log(Object.values(map));