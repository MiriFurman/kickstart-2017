/**
 * Add summarize function to the constructor that returns a string in the following format
 * This car is a <brand> in the color of <color>
 */
function Car(brand, color) {
  this.brand = brand;
  this.color = color;

  this.summarize = function () {
    return `This car is a ${this.brand} in the color of ${this.color}`;
  }
}

const beemer = new Car('BMW', 'blue');
const subie  = new Car('Subaru', 'white');

/**
 * Expected
 */
console.log(beemer.summarize());
// "This car is a BMW in the color of blue"
console.log(subie.summarize());
// "This car is a Subaru in the color of white"
