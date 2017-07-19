/**
 * Implement `customBind` to work just like `bind` works
 * Support setting the context and passing extra arguments
 * Extra arguments are prepended to the bounded function arguments
 */
Function.prototype.customBind = function () {
  // Your code here
};

/**
 * Expected
 */
function test(firstName, lastName) {
  return `${firstName} ${lastName} is ${this.age} years old`;
}

const getJohnDoe1 = test.customBind({ age: 45 }, 'John', 'Doe');
const getJohnDoe2 = test.customBind({ age: 45 }, 'John');

console.log(getJohnDoe1()); // John Doe is 45 years old
console.log(getJohnDoe2('Doe')); // John Doe is 45 years old
