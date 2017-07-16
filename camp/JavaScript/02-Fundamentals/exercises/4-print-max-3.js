/**
 * Write a program that outputs the maximum of `8`, `7`, and `9`, using a function
 * `printMax3(a, b, c)` that accepts three parameters and prints the largest of the three.
 */
// Your code here. Don't edit the lines above this one.

function printMax3(a, b, c) {
  if ( Number(a) >= Number(b) && Number(a) >= Number(c)) {
    return Number(a);
  } else if ( Number(b) >= Number(a) && Number(b) >= Number(c)) {
    return Number(b);
  } else {
    return Number(c);
  }
}

console.log(printMax3('8','7','9'));
