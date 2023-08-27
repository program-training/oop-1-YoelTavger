// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.height * this.width;
  }
}
const rect = new Rectangle(5, 7);
console.log(rect.area());

//  2. Square - ריבוע
class Square extends Rectangle {
  sidesqure: number;

  constructor(sidesqure: number) {
    super(sidesqure, sidesqure);
    this.sidesqure = sidesqure;
  }
  area(): number {
    return this.sidesqure ** 2;
  }
}
const square = new Square(3);
console.log(square.area());

// 3. Shape - צורה

// 4. Method Chaining

// 5. Shape with draw method
