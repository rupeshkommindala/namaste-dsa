var reverseWords = function (s) {
  s = s.trim() + " ";
  let wordsArray = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else if (word.length) {
      wordsArray.unshift(word);
      word = "";
    }
  }
  return wordsArray.join(" ");
};
