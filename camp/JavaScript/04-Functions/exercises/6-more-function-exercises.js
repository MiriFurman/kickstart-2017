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

/* Write a function forEach that calls a func on each array value
 * forEach([1, 4, 5], (x) => console.log(x)) => prints 1
 *                                                     4
 *                                                     5
 */
function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

console.log('================= forEach =================');
forEach([1, 4, 5], (x) => console.log(x));


/**
 * Bonus:
 *
 * Implement a function that reduces an array into a single value using a given function.
 * reduce(array, func, initialValue)
 *
 * For example:
 *   reduce([4, 5, 6], (a, b) => a + b, 0) will return 0 + 4 + 5 + 6
 *
 * In other words, it takes the initialValue and the first value in the array,
 * applies func on them (func(initialValue, array[0])). It stores it in reducedValue.
 *
 * Then it does the same with reducedValue and array[1]
 * Then it does the same with reducedValue and array[2]
 *
 * Then it returns reducedValue
 */
function reduce(array, func, initialValue) {
  let reducedValue = initialValue;
  for (let i = 0; i <  array.length; i++){
    reducedValue = func(reducedValue, array[i]);
  }
  return reducedValue;
}

console.log('================= reduce =================');
console.assert(reduce([4, 5, 6], (a, b) => a + b, 0) === 15);


/**
 * Bonus:
 *
 * Implement the function sumOfPairs below using reduce (you may also need to use filter).
 *
 * sumOfPairs([3, 4, 6, 7]) => 10
 * sumOfPairs([3, 5, 7]) => 0
 *
 */
function sumOfPairs(array) {

}

/**
 * Bonus:
 *
 * Implement the function max below using reduce.
 */
function max(array) {
  let max = Number.MIN_VALUE;
  array.forEach(function (item) {
    if (item > max) {
      max = item;
    }
  });
  return max;
}

console.log('================= max =================');
console.assert(max([3,-8,6,0,-20]) === 6);

