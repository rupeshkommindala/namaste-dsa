for (let i = 0; i < 5; i++) {
  console.log("Hello World !");
}

for (let i = 0; i <= 4; i++) {
  console.log("Hello World " + i);
}

for (let i = 3; i < 5; i++) {
  console.log("Hello World! " + i);
}

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello World! " + i);
}

for (let i = 2; i < 9; i = i + 3) {
  console.log("Hello World !" + i);
}

for (let i = 5; i > 0; i--) {
  console.log("Namaste " + i);
}

function greet() {
  console.log("Namaste");
}
for (let i = 0; i < 5; i++) {
  greet();
}

let arr = [10, 6, 2, 0, 8, 3, 80];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
