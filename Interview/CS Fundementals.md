## 1. What are some important features in OOP?
1. Encapsulation
2. Inheritance
3. Polymorphism


### Encapsulation
Encapsulation helps to protect the integrity of an object by preventing unauthorized access to its internal state. It refers to the practice of hiding an object's internal state and behavior from the outside world, and providing a controlled interface for interacting with the object.

```ts
class BankAccount {
    private _balance: number; // the "_" prefix denotes that this is a private property

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public deposit(amount: number) {
        this._balance += amount;
    }

    public withdraw(amount: number) {
        if (this._balance < amount) {
            console.log("Insufficient funds");
        } else {
            this._balance -= amount;
        }
    }

    public get balance(): number { // this is a getter, it allows to access the private property as if it was public
        return this._balance;
    }
}

let myAccount = new BankAccount(1000);
console.log(myAccount.balance); // 1000
myAccount.deposit(250);
console.log(myAccount.balance); // 1250
myAccount.withdraw(500);
console.log(myAccount.balance); // 750
```
In this example, the BankAccount class encapsulates the internal state of the account (the _balance property) by making it private. This means that it can only be accessed and modified within the class itself, and not from outside the class. Instead, the class provides public methods (deposit(), withdraw()) for interacting with the account, which enforce certain rules and constraints on the balance. Additionally, the get balance() accessor allows the user to read the balance of the account as if it was public property.
This way, the class implementation can change without affecting the other parts of the code that use it.


### Polymorphism
Polymorphism refers to the ability of a single function to operate on multiple types of data or objects. This allows for flexibility and code reuse, as a single function can be used with different types of objects, rather than having to write a separate function for each type. In most OOP languages, polymorphism is achieved through the use of interfaces, abstract classes, and virtual functions.

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


## 2. When you type a URL into a website, the following process happens:

The browser sends a request to the DNS (Domain Name System) resolver to get the IP address of the server associated with the domain name in the URL.

The DNS resolver returns the IP address of the server to the browser, which then sends an HTTP (HyperText Transfer Protocol) request to the server using that IP address.

The server processes the request and returns an HTTP response, which includes the status code, headers, and body (e.g. HTML, CSS, JavaScript) of the requested web page.

The browser uses the information in the HTTP response to render the web page and display it to the user.

The browser also caches the resources required to display the web page, such as images and stylesheets, to speed up subsequent requests for the same page.

Note: This is a high-level overview of the process and does not cover all details, such as SSL/TLS encryption, HTTP redirects, or browser-side caching.
