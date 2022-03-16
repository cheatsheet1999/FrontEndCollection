### Homework 3

```js
class Shape {
    constructor(num) {
        this.name = 'Shape';
        this.num_of_edge = num;
    }
    toString1() {
        return this.name;
    }
}

class TwoDShape extends Shape {
    constructor(num) {
        super(num);
        this.name = '2D shape';
    }
    toString2() {
        return this.name+" in toString2";
    }
}

// Difference between extends TwoDShape and Shape
class Triangle extends TwoDShape {
    constructor(num, side, height) {
        super(num);
        this.side = side;
        this.height = height;
        this.name = 'Triangle';
    }
    getArea() {
        return this.side * this.height / 2;
    }
}

let my = new Triangle(3, 5, 10);
console.log(my.constructor)
console.log(Object.getPrototypeOf(my));
console.log(Object.getOwnPropertyNames(my))
console.log("my.name = " + my.name);
console.log("my.getArea() = " + my.getArea());
// access method in parent
console.log(my.toString2());
// access method in parent's parent
console.log(my.toString1());



// create object in TwoDShape
let two = new TwoDShape(10);
// inheritance and local properties
console.log(two.constructor)
console.log(Object.getPrototypeOf(two));
console.log(Object.getOwnPropertyNames(two))
// access local property
console.log("two.name = " + two.name);
// access method in parent
console.log("two.toString1() = " + two.toString1());
// access method in subclass - never happen
console.log("two.getArea() = " + two.getArea());
```
