// Print from 1 to N using Recursion

let n = 5;
var printFrom1toN = function (x) {
  if (x > n) {
    return;
  }
  console.log(x);
  x = x + 1;
  printFrom1toN(x);
};

printFrom1toN(1);
