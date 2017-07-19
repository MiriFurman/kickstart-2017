function identify(country, age) {
  return `${this}, from ${country}, age ${age}`;
}

/**
 * Write the code to get the result below
 */
function getResult() {
  return identify.call('John Doe', 'USA', 47);
}

/**
 * Expected
 */
console.log(getResult());
// John Doe, from USA, age 47
