/**
 * Implement the tests below. Don't forget to use isArrayEqual to check
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
 * Use Array.map to write the function below that returns an array
 * which is the uppercases all the strings in an array
 *
 * upperCaseArray(['hello', 'world']) => ['HELLO', 'WORLD']
 * upperCaseArray([]) => []
 *
 */
function upperCaseArray(array) {
  return array.map(function (el) {
    return el.toUpperCase();
  });
}

console.log('================= upperCaseArray =================');
console.assert(isArrayEqual(upperCaseArray(['hello', 'world']), ['HELLO', 'WORLD']) === true);
console.assert(isArrayEqual(upperCaseArray([]), []) === true);

/**
 * Use Array.filter to write a function below that returns
 * an array that contains only strings that include the string 'str'
 *
 * onlyIncludes(['helloy', 'boy', 'Baby'], 'oy') => ['helloy', 'boy']
 *
 */
function onlyIncludes(array, str) {
  return array.filter(el => el.includes(str));
}

console.log('================= onlyIncludes =================');
console.assert(isArrayEqual(onlyIncludes(['helloy', 'boy', 'Baby'], 'oy'), ['helloy', 'boy']) === true);

/**
 * Write a function repeat that repeats a call to a function n times.
 *
 * repeat(() => console.log('hi'), 3) => prints hi
 *                                              hi
 *                                              hi
 */
function repeat(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

console.log('================= repeat =================');
repeat(() => console.log('hi'), 3);

