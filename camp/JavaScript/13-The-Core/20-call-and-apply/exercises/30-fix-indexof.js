/**
 * An array-like object: note the non-negative integers used as keys
 */
const anArrayLikeObj = {
  0: 'Martin',
  1: 78,
  2: 67,
  3: ['Peter', 'John', 'Paul'],
  length: 4
};

/**
 * Fix the following function
 */
function getIndex(search) {
  return Array.prototype.indexOf.call(anArrayLikeObj, search);
}

/**
 * Expected
 */
console.log(getIndex('Martin'));
// 0
console.log(getIndex(67));
// 2
