function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

/**
 * Write the code to get the result below
 */
function getResult() {
  // Your code here
  var person = {
    firstName: 'John',
    lastName: 'Doe',
  };

  return getFullName.call(person);

}

/**
 * Expected
 */
console.log(getResult());
// John Doe
