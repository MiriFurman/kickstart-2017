// ES6 added Classes to make our lives easier
class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name + ' Doe';
  }
}

const me = new Person('John');

console.log(me.getName()); // John Doe
