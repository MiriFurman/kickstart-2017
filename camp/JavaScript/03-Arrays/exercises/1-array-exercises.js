/**
 * Implement the functions below. Don't forget to write tests.
 * Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

function isArrayEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (const i in array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

/**
 * Returns the sum of an array.
 *
 * sum([4, 5, 6]) => 15
 * sum([]) => 0
 */
function sum(array) {
  let sum = 0;
  array.forEach(function (item) {
    sum += item;
  });
  return sum;
}

console.log('================= sum =================');
console.assert(sum([4, 5, 6]) === 15);
console.assert(sum([]) === 0);

/**
 * Returns the average of an array. Use sum function above.
 *
 * average([4, 5, 6]) => 5
 * average([4]) => 4
 * average([]) => 0
 */
function average(array) {
  if (array.length) {
    return sum(array)/(array.length);
  } else {
    return 0;
  }
}

console.log('================= average =================');
console.assert(average([4, 5, 6]) === 5);
console.assert(average([4]) === 4);
console.assert(average([]) === 0);

/**
 * Returns an array that does not contain the value.
 *
 * removeValue([4, 5, 6, 4, 3], 4) => [5, 6, 3]
 * removeValue([4, 4, 4], 4) => []
 */
function removeValue(array, value) {
  return array.filter(n => n !== value);
}

console.log('================= removeValue =================');
console.assert(isArrayEqual(removeValue([4, 5, 6, 4, 3], 4), [5, 6, 3]) === true);
console.assert(isArrayEqual(removeValue([4, 4, 4], 4), []) === true);

/**
 * receives an array whose elements are also arrays. Returns an array with the
 * same elements as in the sub-arrays.
 *
 * flatten([[1, 2], [4, 3]]) ==> [1, 2, 4, 3]
 * flatten([[1, 2], []]) ==> [1, 2]
 * flatten([[]]) ==> []
 */
function flatten(arrayOfArrays) {
  return [].concat.apply([], arrayOfArrays);
}

console.log('================= flatten =================');
console.assert(isArrayEqual(flatten([[1, 2], [4, 3]]), [1, 2, 4, 3]) === true);
console.assert(isArrayEqual(flatten([[1, 2], []]), [1, 2]) === true);
console.assert(isArrayEqual(flatten([[]]), []) === true);
