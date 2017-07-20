function Person() {}

Person.prototype.getName = function () {
  return this.name;
};

function Me() {
  this.name = 'John Doe';
}

Me.prototype = Object.create(Person.prototype);

const me = new Me();

console.log(me.getName()); // John Doe
