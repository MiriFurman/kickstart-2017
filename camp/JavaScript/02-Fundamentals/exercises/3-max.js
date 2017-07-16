// Write the function max
// One test is given. Write more.

function max(a, b) {
  return (a >= b) ? a : b;
}

if (max(4, 5) !== 5) {
  throw 'failed';
}
