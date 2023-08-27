// // את הקוד שלכם תכתבו כאן

// //  1. Rectangle - מלבן
// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.height * this.width;
//   }
// }
// const rect = new Rectangle(5, 7);
// console.log(rect.area());

// //  2. Square - ריבוע
// class Square extends Rectangle {
//   sidesqure: number;

//   constructor(sidesqure: number) {
//     super(sidesqure, sidesqure);
//     this.sidesqure = sidesqure;
//   }
//   area(): number {
//     return this.sidesqure ** 2;
//   }
// }
// const square = new Square(3);
// console.log(square.area());

// // 3. Shape - צורה
// class Shape {
//   info(): string {
//     return "This is a Shape";
//   }
// }

// class Rectangle extends Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     super();
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.height * this.width;
//   }

//   info(): string {
//     return "this is a Rectangle";
//   }
// }
// class ColoredRectangle extends Rectangle {
//   color: string;

//   constructor(width: number, height: number, color: string) {
//     super(width, height);
//     this.color = color;
//   }
//   info(): string {
//     return `It is a ${this.color} rectangle`;
//   }
// }
// const rect = new ColoredRectangle(4, 9, "black");
// console.log(rect.area());
// console.log(rect.info());

// // 4. Method Chaining
// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.height * this.width;
//   }

//   info(): string {
//     return "this is a Rectangle";
//   }

//   scale(num: number) {
//     this.height += num;
//     return this;
//   }

//   static combine(rect1: Rectangle, rect2: Rectangle): Rectangle {
//     const newWidth = rect1.width + rect2.width;
//     const newHeight = rect1.height + rect2.height;
//     return new Rectangle(newWidth, newHeight);
//   }
// }

// const rect1 = new Rectangle(5, 6);
// console.log(`area of rect1: ${rect1.scale(7).area()}`);

// const rect2 = new Rectangle(8, 4);
// console.log(`area of rect2: ${rect2.scale(3).area()}`);

// const combinedRect = Rectangle.combine(rect1, rect2);
// console.log(`area of rect1 and rect2: ${combinedRect.area()}`);

// 5. Shape with draw method
class Shape {
  info(): string {
    return "This is a Shape";
  }

  draw(): void {
    console.log("drawing a shape");
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.height * this.width;
  }

  draw(): void {
    console.log("drawing a Rectangle");
  }
}

class Square extends Shape {
  width: number;

  constructor(width: number) {
    super();
    this.width = width;
  }
  area() {
    return this.width ** 2;
  }
  draw(): void {
    console.log("drawing a Square");
  }
}

class Circle extends Shape {
  r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }
  area(): number {
    return Math.PI * this.r ** 2;
  }
  draw(): void {
    console.log("drawing a Circle");
  }
}


function renderShapes(shapes: Shape[]): void {
  for (const shape of shapes) {
    shape.draw();
  }
}

const shapes: Shape[] = [new Circle(4), new Rectangle(4, 6), new Square(2)];

renderShapes(shapes);
console.log(new Circle(4).area());
