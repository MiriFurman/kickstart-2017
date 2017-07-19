function getFullName(greeting) {
  return greeting + ' ' + this.firstName + ' ' + this.lastName;
}

const context = {
  firstName: 'Peter',
  lastName: 'Pan'
};

function getResult(greeting) {
  return getFullName.bind(context, greeting);
}

/**
 * Expected
 */
console.log(getResult('Hello!')()); // Hello! Peter Pan
console.log(getResult('Yo!')()); // Yo! Peter Pan
