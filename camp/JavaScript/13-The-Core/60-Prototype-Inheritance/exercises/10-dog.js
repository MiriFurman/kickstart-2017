/**
 * Create Animal constructor function that Dog will inherit using "Object.create"
 */


/**
 * Your code here
 * 1. Create Animal
 * 2. Add makeSound function to Animal
 * 3. makeSound function will do "console.log(this.sound)"
 */


function Animal() {}

Animal.prototype.makeSound = function () {
  return console.log(this.sound);
};

function Dog() {
  this.sound = 'WOOF';
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  this.makeSound();
};

const fido = new Dog();

/**
 * Expected
 */
fido.bark(); // WOOF
