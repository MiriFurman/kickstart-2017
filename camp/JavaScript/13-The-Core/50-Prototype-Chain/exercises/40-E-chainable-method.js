/**
 * Add a method to the Car prototype which modifies the color.
 */

function Car(color) {
  this.color = color;
}

const carA = new Car('red');
const carB = new Car('blue');

Car.prototype.changeColor = function (color) {
  this.color = color;
};

/**
 * Expected
 */
carA.changeColor('green');
console.log(carA.color);
// green

carB.changeColor('black');
console.log(carB.color);
// black
