/**
 * Function that returns true if the number is even or divides by 5
 *
 * isEvenOrDividesBy5(6) => true
 * isEvenOrDividesBy5(10) => true
 * isEvenOrDividesBy5(15) => true
 * isEvenOrDividesBy5(7) => false
 * isEvenOrDividesBy5(9) => false
 *
 * Test this function!
 */
function isEvenOrDividesBy5(num) {
  return (num % 2 === 0 || num % 5 === 0);
}

console.log('================= isEvenOrDividesBy5 =================');
console.assert(isEvenOrDividesBy5(3) === false);
console.assert(isEvenOrDividesBy5(25) === true);
console.assert(isEvenOrDividesBy5(12) === true);


/**
 * Write the function min that will return the minimum of the two parameters:
 *
 * min(4, 5) => 4
 * min(6, 2) => 2
 * min(3, 3) => 3
 *
 * Test this function!
 */
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log('================= min =================');
console.assert(min(4,5) === 4);
console.assert(min(6,2) === 2);
console.assert(min(3,3) === 3);


/**
 * Write the function max that will return the maximum of the two parameters:
 *
 * min(4, 5) => 5
 * min(6, 2) => 6
 * min(3, 3) => 3
 *
 * Test this function!
 */
function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log('================= max =================');
console.assert(max(4,5) === 5);
console.assert(max(6,2) === 6);
console.assert(max(3,3) === 3);

/**
 * Write a function that will print a, b - sorted
 *
 * sort(4, 7) => prints 4 7
 * sort(7, 4) => prints 4 7
 *
 * Use min and max that you wrote above for that
 *
 * Test this function!
 */
function sort(a, b) {
  return min(a,b) + ' ' + max(a,b);
}

console.log('================= sort =================');
console.assert(sort(4, 7) === '4 7');
console.assert(sort(7, 4) === '4 7');


/**
 * Check whether two players can play the game of thrones. True only iff both are adults (>= 18)
 *
 * canPlayGameOfThrones(7, 19) => false
 * canPlayGameOfThrones(18, 19) => true
 * canPlayGameOfThrones(8, 8) => false
 *
 * Test this function!
 */
function canPlayGameOfThrones(age1, age2) {
  return (age1 >= 18 && age2 >= 18);
}

console.log('================= canPlayGameOfThrones =================');
console.assert(canPlayGameOfThrones(7, 19) === false);
console.assert(canPlayGameOfThrones(18, 19) === true);
console.assert(canPlayGameOfThrones(8, 8) === false);


/**
 * Check whether two players can play the cards against humanity game.
 * True only iff at least one is an adult (>= 18)
 *
 * canPlayCardsAgainstHumanity(7, 19) => true
 * canPlayCardsAgainstHumanity(19, 7) => true
 * canPlayCardsAgainstHumanity(7, 8) => false
 * canPlayCardsAgainstHumanity(20, 20) => true
 *
 * Test this function!
 */
function canPlayCardsAgainstHumanity(age1, age2) {
  return (age1 >= 18 || age2 >= 18);
}

console.log('================= canPlayCardsAgainstHumanity =================');
console.assert(canPlayCardsAgainstHumanity(7, 19) === true);
console.assert(canPlayCardsAgainstHumanity(19, 7) === true);
console.assert(canPlayCardsAgainstHumanity(7, 8) === false);
console.assert(canPlayCardsAgainstHumanity(20, 20) === true);

/**
 * Check whether two players can play Barbie.
 * True only iff none of them are aduly(>= 18)
 *
 * canPlayBarbie(7, 19) => false
 * canPlayBarbie(18, 7) => false
 * canPlayBarbie(7, 8) => true
 * canPlayBarbie(20, 20) => false
 *
 * Test this function!
 */
function canPlayBarbie(age1, age2) {
  return (age1 < 18 && age2 < 18);
}

console.log('================= canPlayBarbie =================');
console.assert(canPlayBarbie(7, 19) === false);
console.assert(canPlayBarbie(18, 7) === false);
console.assert(canPlayBarbie(7, 8) === true);
console.assert(canPlayBarbie(20, 20) === false);

/**
 * Check whether two players can play a game. The games can be Barbie, CardsAgainstHumanity, GameOfThrones,
 * or Monopoly. Monopoly, everyone can play. For the others, the rules are above. Please use the functions
 * above to implement this function.
 *
 * canPlay('Monopoly', 4, 6) => true
 * canPlay('Barbie', 10, 20) => false
 * ...
 *
 * Test this function!
 */
function canPlay(game, age1, age2) {
  if (game === 'Monopoly') {
    return true;
  }
  if (game === 'Barbie') {
    return canPlayBarbie(age1,age2);
  }
  if (game === 'CardsAgainstHumanity') {
    return canPlayCardsAgainstHumanity(age1,age2);
  }
  if (game === 'GameOfThrones') {
    return canPlayGameOfThrones(age1, age2);
  }
    return false;
}

console.log('================= canPlay =================');
console.assert(canPlay('Monopoly',4,6) === true);
console.assert(canPlay('Barbie', 10, 20) === false);
console.assert(canPlay('CardsAgainstHumanity',19,8) === true);
console.assert(canPlay('GameOfThrones',17,20) === false);

