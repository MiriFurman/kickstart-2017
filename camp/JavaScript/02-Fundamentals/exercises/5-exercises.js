/**
 * Implement the functions below. Don't forget to test them!
 */

/**
 * Write a function that checks whether a number is even or not
 *
 * isEven(5) ==> false
 * isEven(896) ==> true
 */
function isEven(num) {
  return (num % 2 === 0);
}

console.log('================= isEven =================');
console.log(isEven(5)); //false
console.log(isEven(896)); //true

/**
 * Write a function that checks whether a number is odd or not. Use isEven.
 *
 * isOdd(5) ==> true
 * isOdd(896) ==> false
 */
function isOdd(num) {
  return (num % 2 !== 0);
}

console.log('================= isOdd =================');
console.log(isOdd(5)); //true
console.log(isOdd(896)); //false

/**
 * returns true if n is inside the range rangeStart.. rangeEnd
 * the inclusive parameter is a boolean that says whether the range includes rangeStart and rangeEnd
 *
 */
function insideOf(n, rangeStart, rangeEnd, inclusive) {
  if ((n === rangeStart || n === rangeEnd) && inclusive === true ) {
    return true;
  } else if (n > rangeStart &&  n < rangeEnd && inclusive === false) {
    return true;
  }
  return false;
}

console.log('================= insideOf =================');
console.log(insideOf(2,1,3,true)); //false
console.log(insideOf(2,1,3,false)); //true
console.log(insideOf(3,1,3,true)); //true
console.log(insideOf(4,1,3,false)); //false

/**
 * returns true if n is outside the range rangeStart.. rangeEnd
 * the inclusive parameter is a boolean that says whether the range includes rangeStart and rangeEnd
 *
 */
function outsideOf(n, rangeStart, rangeEnd, inclusive) {
  if ((n === rangeStart || n === rangeEnd) && inclusive === true ) {
    return false;
  } else if (n > rangeStart && n < rangeEnd) {
    return false;
  }
  return true;
}

console.log('================= outsideOf =================');
console.log(outsideOf(3,1,3,true)); //false
console.log(outsideOf(3,1,3,false)); //true
console.log(outsideOf(2,1,3,true)); //false
console.log(outsideOf(4,1,3,false)); //true

/**
 * Write a function that translates the words "hello", "goodbye", "spanish"
 * in three languages ("english", "french", "spanish") to english.
 * If it receives a word it does not know, or a language it does not now, it returns "sorry".
 */
function translate(word, language) {
  const english = {'hello': 'hello', 'goodbye': 'goodbye', 'spanish': 'spanish'};
  const spanish = {'hello': 'Ola', 'goodbye': 'adios', 'spanish': 'español'};
  const french = {'hello': 'bonjour', 'goodbye': 'au revoir', 'spanish': 'Espanol'};

  if (language === 'english' && english[word]) {
    return english[word];
  } else if (language === 'spanish' && spanish[word]) {
    return spanish[word];
  } else if (language === 'french' && french[word]) {
    return french[word];
  }

  return "sorry";
}

console.log('================= translate =================');
console.log(translate('hello', 'french')); //bonjour
console.log(translate('goodbye', 'english')); //goodbye
console.log(translate('spanish', 'spanish')); //español
console.log(translate('bla', 'french')); //sorry


/**
 * Write a function that returns "morning", "noon", "afternoon", "evening", or "night",
 * depending on hours and minutes.
 * morning - 6:00 - 11:29
 * noon - 11:30 - 13:00
 * afternoon - 13:01 - 17:00
 * evening - 17:01 - 20:30
 * night - 20:31 - 5:59
 */
function timeOfDay(hours, minutes) {
  if (hours > 24 || hours < 0 || minutes > 60 || minutes < 0) {
    return 'Invalid time';
  }
  if (hours >= 6 && hours < 11) {
    return 'morning';
  } else if (hours === 11) {
    if (minutes < 30) {
      return 'morning';
    } else {
      return 'noon';
    }
  } else if (hours > 11 && hours < 13) {
    return 'noon';
  } else if (hours === 13) {
    if (minutes < 1) {
      return 'noon';
    } else {
      return 'afternoon';
    }
  } else if (hours > 13 && hours < 17) {
    return 'afternoon';
  } else if (hours === 17) {
    if (minutes < 1) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  } else if (hours > 17 && hours < 20) {
    return 'evening';
  } else if (hours === 20) {
    if (minutes < 30) {
      return 'evening';
    } else {
      return 'night';
    }
  } else {
    return 'night';
  }
}

console.log('================= timeOfDay =================');
console.log(timeOfDay(7,30)); //morning
console.log(timeOfDay(11,30)); //noon
console.log(timeOfDay(14,45)); //afternoon
console.log(timeOfDay(17,1)); //evening
console.log(timeOfDay(23,0)); //night
console.log(timeOfDay(25,0)); //Invalid time

/**
 * Write a program that receives the three grades the student got.
 * If the average > 60, return true, otherwise return false.
 *
 * didStudentPass(60, 70, 80) ==> true
 * didStudentPass(40, 50, 60) ==> false
 */
function didStudentPass(gradeA, gradeB, gradeC) {
  return ((gradeA + gradeB + gradeC)/3 > 60);
}

console.log('================= didStudentPass =================');
console.log(didStudentPass(60,70,80)); //true
console.log(didStudentPass(40,50,60)); //false


/**
 * Reverses a one or two digit number.
 * reverseTwoDigitNumber(3) ==> 30 (because 3 "===" 03)
 * reverseTwoDigitNumber(34) ==> 43
 * reverseTwoDigitNumber(0) => 0
 *
 * You can use Math.floor(). Math.floor(4) ==> 4, Math.floor(4.7) ==> 4, Math.floor(4.2) ==> 4
 *
 * How? Let's take 34. Extract the 4 using 34 % 10. Now extract the 3 using 34 / 10.
 * Now that you have the 3 and 4, rebuild the number using 4 * 10 + 3.
 *
 * If you do it this way, then 3 => 30, and 0 => 0
 * will just happen without needing any special programming.
 *
 */
function reverseTwoDigitNumber(n) {
  const second = n % 10;
  const first = Math.floor(n/10);
  return second * 10 + first;
}

console.log('================= reverseTwoDigitNumber =================');
console.log(reverseTwoDigitNumber(3)); //30
console.log(reverseTwoDigitNumber(34)); //43
console.log(reverseTwoDigitNumber(0)); //0

/**
 * Bonus:
 *
 * Reverses a one or two digit or three digit number. You can (and should) use
 * 'reverseTwoDigitNumber' in your implementation
 * reverseThreeDigitNumber(3) ==> 300 (because 3 "===" 003)
 * reverseThreeDigitNumber(34) ==> 430
 * reverseThreeDigitNumber(345) ==> 543
 * reverseThreeDigitNumber(0) => 0
 *
 */
function reverseThreeDigitNumber(n) {
  const third = n % 10;
  const res = reverseTwoDigitNumber(Math.floor(n/10));
  return third * 100 + res;
}

console.log('================= reverseThreeDigitNumber =================');
console.log(reverseThreeDigitNumber(3)); //300
console.log(reverseThreeDigitNumber(34)); //430
console.log(reverseThreeDigitNumber(345)); //543
console.log(reverseThreeDigitNumber(0)); //0
