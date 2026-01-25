// Loop
for (let i = 0; i < 5; i++) {
  console.log("Namaste !");
}

// Loop inside Loop
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("Hello !");
  }
}

// Printing Loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i =", i, "j =", j);
  }
}

// Loop inside Loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}

// Loop inside Loop
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("Loop i,j", i, j);
  }
}

// Loop inside Loop
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(i, j);
  }
}

// Loop inside Loop
for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    console.log("i = " + i + " j = " + j);
  }
}

// Loop inside Loop
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
