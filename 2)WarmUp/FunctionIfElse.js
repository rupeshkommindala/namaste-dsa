// Print Hello World
function printHelloWorld() {
  console.log("Hello World!!");
}

printHelloWorld();

// Greet
function greet(name) {
  console.log("Namaste, " + name);
}

let x = "Virat Kohli";
greet(x);
greet("Anushka");
greet("Rupesh");
greet("Priyanka Chopra");

// Sum of Two Numbers
function sum(a, b) {
  let add = a + b;
  console.log(add);
}

let y = 100;
let z = 200;
sum(y, z);
sum(10, 20);

// Multiplication of Two Numbers
function multiply(a, b) {
  let result = a * b;
  console.log(result);
}

multiply(10, 8);

// Square of a given Number
function square(x) {
  let result = x * x;
  return result;
}

let value = square(10);
console.log(value);

// Create a function whether a person is eligible to Vote or Not
function isEligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid Input");
  } else if (age < 18) {
    console.log("Not Eligible");
  } else {
    console.log("Eligible");
  }
}

isEligibleToVote(-10);
isEligibleToVote(14);
isEligibleToVote(20);

// Create a function whether a given number is Even or Odd
function isEvenOrOdd(num) {
  let rem = num % 2;
  if (rem === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

isEvenOrOdd(10);
isEvenOrOdd(11);
