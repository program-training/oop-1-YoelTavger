// את הקוד שלכם תכתבו כאן
//  1. Rectangle - מלבן
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 7);
console.log(rectangle.area());
//  2. Square - ריבוע
// 3. Shape - צורה
// 4. Method Chaining
// 5. Shape with draw method
