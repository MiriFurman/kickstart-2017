/**
 * Write the code to get the result below
 * Assume the function can receive any number of arguments
 * You should use `forEach` instead of a regular for loop
 */
function sum() {
  let sum = 0;
  Array.prototype.forEach.call(arguments, (arg) => {
    sum += arg;
  });
  return sum;
}

/**
 * Expected
 */
console.log(sum(10, 20, 30, 40));
// 100
