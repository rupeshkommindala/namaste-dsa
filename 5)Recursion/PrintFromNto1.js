// Print From N to 1 using Recursion

function printFromNto1(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  n = n - 1;
  printFromNto1(n);
}

printFromNto1(5);
