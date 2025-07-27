// Print From 1 to N using Recursion

let n = 10;
function Print(x) {
  if (x > n) {
    return;
  }
  console.log(x);
  x = x + 1;
  Print(x);
}

Print(1);
