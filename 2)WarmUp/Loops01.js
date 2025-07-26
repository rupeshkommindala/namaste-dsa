// Printing Hello World ! 5 times
for (let i = 0; i < 5; i++) {
  console.log("Hello World !");
}

// Printing Hello World ! 5 times
for (let i = 0; i <= 4; i++) {
  console.log("Hello World " + i);
}

// Printing Hello World ! 2 times
for (let i = 3; i < 5; i++) {
  console.log("Hello World! " + i);
}

// Printing Hello World
for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello World! " + i);
}

// Printing Hello World
for (let i = 2; i < 9; i = i + 3) {
  console.log("Hello World !" + i);
}

// Printing Namaste according to the Loop
for (let i = 5; i > 0; i--) {
  console.log("Namaste " + i);
}

// Greet function
function greet() {
  console.log("Namaste");
}

// Calling Greet function inside for Loop
for (let i = 0; i < 5; i++) {
  greet();
}

// Accessing all the elements using Loops
let array = [10, 6, 2, 0, 8, 3, 80];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Print all the Even numbers in the Array
let arr = [10, 6, 2, 0, 8, 3, 80];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

// While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
