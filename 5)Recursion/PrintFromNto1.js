// Print From N to 1 using Recursion

function PrintFromNto1(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  PrintFromNto1(n - 1);
}
let number = 10;
PrintFromNto1(number);
