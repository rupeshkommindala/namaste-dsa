// While Loop
let i = 0;
while (i < 5) {
  console.log("While Loop");
  i++;
}
// Print the Elements
let arr = [5, 6, 38, 25, 90, 34];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Print the Even numbers in this array
let elem = [5, 6, 38, 25, 90, 34];
for (let i = 0; i < elem.length; i++) {
  if (elem[i] % 2 == 0) {
    console.log(elem[i]);
  }
}

// Print the Odd numbers in this array
let elem2 = [5, 6, 38, 25, 90, 34];
for (let i = 0; i < elem2.length; i++) {
  if (elem2[i] % 2 == 1) {
    console.log(elem2[i]);
  }
}

for (let i = 5; i > 0; i--) {
  console.log("Hello World Negative Decrement");
}

for (let i = 0; i < 10; i++) {
  console.log("Hello World !");
}

for (let i = 0; i <= 4; i++) {
  console.log("Hello World ! " + i);
}

for (let i = 3; i < 5; i++) {
  console.log("Namaste");
}

for (let i = 2; i < 9; i = i + 2) {
  console.log("Namaste Hello World !");
}
