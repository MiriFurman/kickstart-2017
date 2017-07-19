function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

const context = {
  firstName: 'John',
  lastName: 'Doe'
};

function getResult() {
  return getFullName.bind(context);
}

/**
 * Expected
 */
const result = getResult();

console.log(result()); // John Doe
