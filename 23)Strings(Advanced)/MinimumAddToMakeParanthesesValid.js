var minAddToMakeValid = function (s) {
  let openCount = 0;
  let moves = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openCount++;
    } else {
      if (openCount === 0) {
        moves++;
      } else {
        openCount--;
      }
    }
  }
  return openCount + moves;
};
