### Homework 2

```js
Array.prototype.shuffle = function() {
    let arr = this;
    for (let i = 1; i < arr.length; i++) {
        let random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
}

console.log([1,2,3,4,5,6,7].shuffle());


```



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

### Homework4
```js
class SingletonWriter {
    constructor(unit, name, questions) {
        this.unit = unit;
        this.name = name;
        this.questioms = questions;
    }

    static getInstance(unit, name, questions) {
        if(!this.instance) {
            this.instance = new SingletonWriter(unit, name, questions);
        }
        return this.instance;
    }
}

let originalWriter = SingletonWriter.getInstance('HW4', 'Alan', ['q1,q2,q3']);
let copyWriter = SingletonWriter.getInstance('HW4', 'Emma', ['q1,q2,q3']);

// the class should either return the same previously instantiated object
console.log(originalWriter)
console.log(copyWriter)
```


### Homework5
```js
class TwoSum {
    constructor(arr) {
        this.arr = [];
    }

    add(num) {
        this.arr.push(num);
    }

    find(value) {
        this.arr.sort((a, b) => a - b);
        let left = 0
        let right = this.arr.length -1

        // two pointers
        while(left < right){
            let twoSum = this.arr[left] + this.arr[right]
            if(twoSum < value){
                left += 1
            }else if(twoSum > value){
                right -= 1
            }else if(twoSum === value){
                return true
            }
        }
        return false
    }

    remove(value) {
        let index = this.arr.indexOf(value);
        let count = 0;
        this.arr.forEach(() => {
            if (index > -1) {
                this.arr.splice(index, 1); // 2nd parameter means remove one item only
                count++;
            }
        })
        return `${count} item(s) have been removed`
    }
}

let t1 = new TwoSum()
t1.add(1);
t1.add(3);
t1.add(3);

t1.add(5);

console.log(t1.arr)
console.log(t1.find(4))
console.log(t1.find(7))
console.log(t1.remove(3));
console.log(t1.arr)

```
