/* 
 Pattern 1
 * * * *
 * * * *
 * * * *
 * * * *
*/
let m = 4;
for (let i = 0; i < m; i++) {
  let row = "";
  for (let j = 0; j < m; j++) {
    row = row + "* ";
  }
  console.log(row);
}

/*
 Pattern 2
 *
 * *
 * * *
 * * * *
*/
let f = 4;
for (let i = 0; i < f; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "* ";
  }
  console.log(row);
}

/*
 Pattern 3
 1
 1 2
 1 2 3
 1 2 3 4
*/
let k = 5;
for (let i = 0; i < k; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (j + 1) + " ";
  }
  console.log(row);
}

/*
 Pattern 4 (Method-1)
 1
 2 2
 3 3 3
 4 4 4 4
*/
let a = 5;
for (let i = 0; i < a; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (i + 1) + " ";
  }
  console.log(row);
}

/*
 Pattern 4 (Method-2)
 1
 2 2
 3 3 3
 4 4 4 4
*/
let b = 5;
for (let i = 1; i <= b; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i + " ";
  }
  console.log(row);
}

/*
 Pattern 5
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
*/
let z = 5;
for (let i = 0; i < z; i++) {
  let row = "";
  for (let j = 0; j < z - i; j++) {
    row = row + (j + 1) + " ";
  }
  console.log(row);
}

/*
 Pattern 6
 * * * * *
 * * * *
 * * *
 * *
 *
*/
let s = 5;
for (let i = 0; i < s; i++) {
  let row = "";
  for (let j = 0; j < s - i; j++) {
    row = row + "*" + " ";
  }
  console.log(row);
}

/*
 Pattern 7
        *
      * *
    * * *
  * * * *
* * * * *
*/
let d = 5;
for (let i = 0; i < d; i++) {
  let row = "";
  for (let j = 0; j < d - i - 1; j++) {
    row = row + "-";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

/*
 Pattern 8
 1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
 1 0 1 0 1 0
*/
let t = 5;
for (let i = 0; i < t; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    // switch the toggle
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}

/*
 Pattern 9
 1
 0 1
 0 1 0
 1 0 1 0
 1 0 1 0 1
*/
let n = 5;
let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    // switch the toggle
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
