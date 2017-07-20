/**
 * Add a method to the Car prototype which returns the string "I am a Car".
 */

function Car() {

}

Car.prototype.isThisACar = function () {
  return 'I am a Car';
};

const myCar = new Car();

/**
 * Expected
 */
console.log(myCar.isThisACar());
// I am a car
