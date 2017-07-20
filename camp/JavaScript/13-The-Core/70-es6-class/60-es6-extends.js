class Person {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Person {
  getName() {
    return this.name + ' Doe Little';
  }
}

const littleMe = new Child('John');

console.log(littleMe.getName()); // John Doe Little
