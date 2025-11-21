// Print From 1 to N using Recursion

let n = 10;
function print(num) {
  if (num > n) {
    return;
  }
  console.log(num);
  num = num + 1;
  print(num);
}

print(1);
