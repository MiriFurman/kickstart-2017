/**
 * Create Square constructor function that inherits from Polygon using "extends"
 */

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width  = width;
  }

  area() {
    return this.height * this.width;
  }
}

/**
 * Your code here
 * 1. Create Square
 * 2. Inherit from Polygon using extends
 */

class Square extends Polygon{
  constructor(width){
    super(width,width);
  }
}



// width and height are equal in a square.
const square = new Square(4);

/**
 * Expected
 */
console.log(square.area()); // 16
