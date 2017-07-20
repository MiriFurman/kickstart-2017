function Product(name, price) {
  this.name  = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);

  this.category   = 'food';
  this.expiration = '';
}

function Toy(name, price) {
  Product.call(this, name, price);

  this.category   = 'toy';
  this.minimumAge = '';
}

const cheese = new Food('feta', 5);
const fun    = new Toy('robot', 40);

console.log(cheese);
console.log(fun);
