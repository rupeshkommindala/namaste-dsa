// Print from N to 1 using Recursion

// (TC:O(n), SC:O(n) Recursion stack)
var printFromNto1 = function (n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  n--;
  printFromNto1(n);
};

printFromNto1(5);
