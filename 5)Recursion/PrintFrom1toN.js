// Print from 1 to N using Recursion

// (TC:O(n), SC:O(n) Recursion stack)
let n = 5;
function printFrom1toN(x) {
  if (x > n) return;

  console.log(x);
  x++;
  printFrom1toN(x);
}

printFrom1toN(1);
