// Create a function whether a number is Even or Odd
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}
isEvenOrOdd(10);
isEvenOrOdd(11);

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
isEligibleToVote(17);
isEligibleToVote(18);

function square(x) {
  let result = x * x;
  return result;
}
let result1 = square(10);
console.log(result1);
let result2 = square(-3);
console.log(result2);

function printHelloWorld() {
  console.log("Hello World!");
}
printHelloWorld();

function greet(name) {
  console.log("Namaste, " + name);
}
greet("Rupesh");
greet("Deepika");
let x = "Virat Kohli";
greet(x);

function sum(a, b) {
  let add = a + b;
  console.log(add);
}
sum(10, 20);

let y = 10;
let z = 50;
sum(y, z);

function multiply(a, b) {
  let result = a * b;
  console.log(result);
}
multiply(10, 20);
