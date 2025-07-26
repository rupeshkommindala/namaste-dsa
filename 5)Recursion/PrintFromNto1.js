function PrintFromNto1(n) {
  if (n === 1) {
    console.log(n);
    return;
  }
  console.log(n);
  return PrintFromNto1(n - 1);
}
let number = 10;
PrintFromNto1(number);
