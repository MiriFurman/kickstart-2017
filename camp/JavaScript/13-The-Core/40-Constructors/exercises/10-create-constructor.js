/**
 * Create a simple Car constructor that gets the brand as a parameter.
 */

function Car(brand) {
  this.brand = brand;
}


const beemer = new Car('BMW');

/**
 * Expected
 */
console.log(beemer.brand);
// BMW
