// Print from N to 1 using Recursion

var printFromNto1 = function (num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  num--;
  printFromNto1(num);
};

printFromNto1(5);
