/**
 * Use chaining to improve the AutonomousCar constructor.
 */

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
}

function AutonomousCar(brand, color, os) {
  Car.call(this, brand, color);
  this.operatingSystem = os;

  this.summarize = function () {
    return `This car is a ${this.color} ${this.brand} and it runs on ${this.operatingSystem}`;
  };
}


const susita = new AutonomousCar('Susita', 'white', 'Windows');


/**
 * Expected
 */
console.log(susita.summarize());
// This car is a white Susita and it runs on Windows
