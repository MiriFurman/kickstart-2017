/**
 * Add "getBrand" function that returns the Car brand
 */

function Car(brand) {
  this.brand = brand;

  this.getBrand = function () {
    return this.brand;
  };
}

const beemer = new Car('BMW');

/**
 * Expected
 */
console.log(beemer.getBrand());
// BMW
