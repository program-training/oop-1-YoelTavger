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
const rectangle = new Rectangle(5, 7);
console.log(rectangle.area());

//  2. Square - ריבוע

// 3. Shape - צורה

// 4. Method Chaining

// 5. Shape with draw method
