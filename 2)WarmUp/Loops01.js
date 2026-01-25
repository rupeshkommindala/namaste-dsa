// Printing Hello World
for (let i = 0; i < 5; i++) {
  console.log("Hello World !");
}

// Printing Hello World
for (let i = 0; i <= 4; i++) {
  console.log("Hello World " + i);
}

// Printing Hello World
for (let i = 3; i < 5; i++) {
  console.log("Hello World " + i);
}

// Printing Hello World
for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello World " + i);
}

// Printing Hello World
for (let i = 2; i < 9; i = i + 3) {
  console.log("Hello World " + i);
}

// Printing Hello according to the Loop
for (let i = 5; i > 0; i--) {
  console.log("Hello " + i);
}

// Greet function
function greet() {
  console.log("Hello");
}

// Calling Greet function inside for Loop
for (let i = 0; i < 5; i++) {
  greet();
}

// Accessing all the elements using Loops
let array = [5, 6, 2, 0, 1];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Print all the Even numbers in the Array
let arr = [5, 6, 2, 0, 1];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

// Print all the Odd numbers in an Array
let nums = [5, 6, 2, 0, 1];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 1) {
    console.log(nums[i]);
  }
}

// While Loop
let i = 0;
while (i < 5) {
  console.log("Hello World");
  i++;
}
