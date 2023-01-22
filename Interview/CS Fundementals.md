## What are some important features in OOP?
1. Encapsulation
2. Inheritance
3. Polymorphism

### Polymorphism
Polymorphism refers to the ability of a single function or method to operate on multiple types of data or objects. This allows for flexibility and code reuse, as a single function can be used with different types of objects, rather than having to write a separate function for each type. In most OOP languages, polymorphism is achieved through the use of interfaces, abstract classes, and virtual functions.

```ts
interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

function getArea(shape: Shape) {
    return shape.area();
}

let rect = new Rectangle(10, 20);
let circle = new Circle(5);

console.log(getArea(rect));  // 200
console.log(getArea(circle)); // 78.53981633974483

```

In this example, `Shape` is an interface that defines a single method `area()`. The `Rectangle` and `Circle` classes both implement this interface, providing their own implementation of the `area()` method. The getArea function takes an instance of any object that implements the Shape interface and calls its `area()` method. By using the `Shape` interface, the `getArea` function is able to operate on both rectangles and circles, which are different types of shapes. This is an example of polymorphism, where a single function can be used with different types of objects.
