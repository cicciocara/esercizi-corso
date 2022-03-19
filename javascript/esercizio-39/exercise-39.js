class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(geometricFigure) {
    if (geometricFigure instanceof Square) {
      return square.side * square.side;
    } else if (geometricFigure instanceof Rectangle) {
      return rectangle.width * rectangle.height;
    } else if (geometricFigure instanceof Circle) {
      return circle.radius * circle.radius * 3.14;
    } else {
      return `it isn't an istance of declared geometrical figure`;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
