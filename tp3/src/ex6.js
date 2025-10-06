var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name,
            this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello ".concat(this.name));
    };
    return Person;
}());
var p = new Person("ilef", 21);
console.log(p);
p.greet();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    return Student;
}(Person));
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.r * this.r;
    };
    return Circle;
}(Shape));
var s = new Circle(2);
console.log(s.area());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(hight, widh) {
        var _this = _super.call(this) || this;
        _this.height = hight;
        _this.width = widh;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    return Rectangle;
}(Shape));
var r = new Rectangle(2, 3);
console.log(r.area());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        return 0;
    };
    return Car;
}());
var c = new Car();
console.log(c.drive());
