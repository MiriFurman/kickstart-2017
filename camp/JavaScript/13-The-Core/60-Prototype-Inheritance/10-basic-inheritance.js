function Person() { }

function Ninja() { }

// Old school way to extend the prototype chain
Ninja.prototype = new Person();

const ninja = new Ninja();

console.log(ninja instanceof Ninja); // true
console.log(ninja instanceof Person); // true
console.log(ninja instanceof Object); // true
