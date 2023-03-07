## 1. What is difference between "var" and "let" keywords?  
1. **var has been in JavaScript syntax since the beginning, and let was introduced in ES6.**
2. **"let" has block scope**, which mean a variable defined with the "let" keyword will die at the end of the block, a.k.a Garbage collection. **"var" has function scope**, so the variable will die at the end of the **function block**
3. The variable defiened with "var" gets **Hoisted** at the top of the function

```js
let x = function() {
    if(true) {
     console.log(v); // Undefined
        var v = 2;
        let l = 1;
    }
    console.log(v); // 2
    console.log(l); //Uncaught Reference Error 
}

x();
```

## 2. What is the difference between == and === ?
- They both are **comparison operator**, but "==" compares **value only**
- Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and plain objects are compared by their reference. That comparison by reference basically checks to see if the objects given refer to the same location in memory

## 3. What is the difference between "let" and "const" keywords?
- After first assigned a value, we CANNOT reassign the value.  

```js
let l = 1;
l = 2;
console.log(l); // 2

const c = 1;
c = 2;
console.log(c) // Error: Assign to a const value

const x;
x = 1; // Error, because x has already been defined to undefined

const d = [1, 2];
d.push(3)
console.log(d); // [1, 2, 3]
```

## 4. What is the difference between null and undefined?
1. undefined is more like a placeholder, when we did not assign a value to a variable, it will automatically be assigned as undefined.
2. typeof(undefined) => undefined, typeof(null) => object


## 5. What is the difference about arrow function?
1. Arrow function will bind `this` keyword to the context enviornment

```js
const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        let splitName = function(n) {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name);
    }
}

profile.setName('john doe');
console.log(profile.firstName) // print nothing
console.log(window.firstName) // john
```
```js
const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        let splitName = (n) => {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name);
    }
}

profile.setName('john doe');
console.log(profile.firstName) // john
```


## 6. What is prototypal inheritance?
- Every object has a property called **prototype**, where we can add methods and properties to it. When we create a new object, the newly created object will inherit property from the parent object. **But** its not including in its own property but instead, it uses from it's parent. When we call a particular method on an object, it firstly looks at it's own properties to see if it's there. If not, it will look at it's parent object. By doing this, the object is much lighter and doesn't carry all this methods with it. For example, if we carried a thousand objects, we don't have to include all of those methods. It's automatically available to us. 

```js

let car = function(model) {
    this.model = model;
}

// create a method on prototype
car.prototype.getModel = function() {
    return this.model;
}

let audi = new car('audi');
console.log(audi.getModel()); // audi

let tesla = new car('tesla');
console.log(tesla.getModel()); // tesla
```


## 7. What is the difference between function declaration and function expression?
1. function declaration is an anonymous function, function expression has a varaible name, so it behaves like a variable, and has variable scope as well.
2. When we want to pass a function to another function, we cannot pass a function declaration to another function, we have to use a function expression because it's like a variable, and we can pass a variable to another function.  


```js
console.log(funcD()); // function declaration
console.log(funcE()); // Error

function funcD() {
    console.log("function declaration");
}

function funcE() {
    console.log("function expression");
}
```

## 8. What is promise
1. When we want to make an **async call**, we have to wait for something to happen and then once it comes back, we exit with a callback function. And, within the callback function, we might do another ajax call, which can wait for another result and we would have another callback function on success or failure and it could become kind of nested callback function hell. Therefore, we need to simplify this thing so we use primises.


## 9. setTimeout

```js
setTimeout(function() {
    console.log('a');
}, 0)

console.log('b')
console.log('c')
```
It will print out b, c, a because when we do `setTimeout`, it becomes an asynchronous, it will come into the event loop after executing 'b' and 'c'.

## 10. What is a closure and how do you use it?
- A closure is the combination of a function enclosed with its lexical environment. In other words, a closure gives us access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, we first define a function inside another function and return it to another function. The inner function then will have access to the variables in the outer function scope, even after the outer function has returned.

**This is an easy example of closure**
```js
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter()); // prints 0
console.log(counter()); // prints 1
console.log(counter()); // prints 2

```

**Unlike calltack, variable in Heap memory can be kept indefinitely then decide when you get rid of it later with the garbage collector**

### why use closure if it requires more memory and procecssing power than a pure function?
1. Data Encapsulation is one of the most important reason because clouse helps to prevent leaking or exposing data where it's not needed.

<img width="1550" alt="Screen Shot 2022-07-12 at 00 58 23" src="https://user-images.githubusercontent.com/37787994/178439707-049bd3bb-424a-42b2-bebf-ff41350dd86f.png">
The data contained in `inner` function will not leak out to the surrounding environment. The `inner` function has access to the data defined in the `outer` function scope. But the outer function does not have access to the `inner` function
   
2. We can use clousures to create a **function factory** that takes an argument then returns a brand new function which can then be passed along to other functions that expect a callback.

```js
function alertFun(message) {
    
    return () => {
        alert(`${message}`);
    }
}

let alertMom = alertFun('hi mom')

alertMom();

```

3. The following program logs `3, 3, 3` because when var is used, it's capturing the reference to the global variable. The reason it log `3,3,3` is because the _**timeout**_ doesn't run until 100 milliseconds later. After that, the for loop has completed and iterated up to three.

```js
for(var i = 0; i < 3; i++) {
    let log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
```
## 11. What is `this` keyword?
There's no simple explanation for this; it is one of the most confusing concepts in JavaScript. A hand-wavey explanation is that the value of this depends on how the function is called. The following rules are applied:

1. If the new keyword is used when calling the function, this inside the function is a brand new object.
2. If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
3. If a function is called as a method, such as obj.method() — this is the object that the function is a property of.
4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.
5. If multiple of the above rules apply, the rule that is higher wins and will set the this value.
6. If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.

[Overview](https://github.com/cheatsheet1999/FrontEndCollection/blob/main/Web-Note/%60this%60%20keyword.md)  

## New features in ES6
- let and const Keywords
- Arrow Functions
- Multi-line Strings
- Default Parameters
- Template Literals
- Destructuring Assignment
- Enhanced Object Literals
- Promises
- Classes
- Modules


## 12. What is the differnece between Array.map, Array.forEach, Array.filter, etc?
<img width="608" alt="Screen Shot 2022-09-16 at 19 55 56" src="https://user-images.githubusercontent.com/37787994/190837959-75008e9d-3ae2-440d-be72-a22ec232b408.png">
<img width="608" alt="Screen Shot 2022-09-16 at 20 45 50" src="https://user-images.githubusercontent.com/37787994/190839304-f11b10ea-42ca-4f3b-beac-f0c299f4b8c7.png">
<img width="608" alt="Screen Shot 2022-09-16 at 20 46 18" src="https://user-images.githubusercontent.com/37787994/190840292-6192c951-c7ef-449b-850a-0919d5462a7c.png">

## 13. what is async await

Promises were introduced to solve the famous callback hell problem, but they introduced complexity on their own, and syntax complexity.      
They were good primitives around which a better syntax could be exposed to the developers, so when the time was right we got async functions.     
They make the code look like it's synchronous, but it's asynchronous and non-blocking behind the scenes.           


```js
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000);
  });
};

```

```js
const doSomething = async () => {
  console.log(await doSomethingAsync());
};

```


## 14. Remove Duplicate Elements from an Array.md

#### 1. ES6 built-in function [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```JS
function unique (arr) {
  return Array.from(new Set(arr))
}
let arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

#### 2. Two for loops, then using [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to de-deduplicate

```JS
function unique(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] === arr[i]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr
}


var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
    //[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     // NaN and {} is ignoredm and the two null's disappared
```


#### 3. Using [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```JS
function unique(arr) {
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        if(res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    return res
}


var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
   // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重

```

#### 4. Using sort

```JS
function unique(arr) {
    arr.sort();
    const res = [arr[0]];
    // If current num is not same as the previous number, then push it
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i - 1]) {
            res.push(arr[i]);
        }
    }
    return res;
}


var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```


## What is Prototypal Inheritance in JS? How does it work?

In JavaScript, every object has a hidden property called `[[Prototype]]`, which refers to its prototype object. When you try to access a property or method of an object that does not exist on the object itself, JavaScript will look up the prototype chain until it finds the property or method on the prototype.

Prototypal inheritance is a way of sharing properties and methods between objects in JavaScript. In this type of inheritance, an object can inherit properties and methods from another object, known as its prototype.

For example, let's say we have an object called `person` with a method `greet`:

```js
const person = {
  greet: function() {
    console.log("Hello!");
  }
};

```

We can create a new object called `employee` that inherits from `person` by setting `employee`'s `[[Prototype]]` to `person`:

```js
const employee = Object.create(person);
```

Now, if we call `employee.greet()`, JavaScript will first look for the `greet` method on `employee` itself. Since it doesn't exist, it will then look for it on `employee`'s prototype (`person`). If it finds it there, it will execute it:

```js
employee.greet(); // logs "Hello!"
```

We can also add new properties and methods to `employee` directly, without affecting `person`:

```js
employee.name = "Alice";
employee.work = function() {
  console.log("Working...");
};
```

Now, `employee` has its own `name` property and `work` method, but it can still access the `greet` method from its prototype

## Explain `this` keyword in JavaScript

- Arrow functions do have a `this` keyword, but they inherit the value of `this` from their surrounding lexical scope and do not have their own `this` value.
- The value of `this` is determined at invocation time and can change depending on how the function is called.
- If a function is called as a standalone function, `this` refers to the global object (`window` in a browser environment, `global` in Node.js) in non-strict mode, and `undefined` in strict mode.
- If a function is called as a method of an object, `this` refers to that object.
- If a function is called with `call()` or `apply()`, `this` is determined by the first argument passed to the method.
- In the context of an event listener, `this` refers to the element that the listener is attached to.
- If a function is called as a constructor with the `new` keyword, `this` refers to a newly-created object whose prototype is set to the `prototype` property of the constructor function.
- If a function is the result of a `bind()` operation, `this` is set to the first argument passed to `bind()`, and this `this` value cannot be changed.

## Explain how different CSS `position` property works

- `static`: This is the default position value for all elements. It means that the element will be positioned according to its normal position in the document flow. `top`, `bottom`, `left`, and `right` properties have no effect on static positioned elements.
- `relative`: This value positions the element relative to its normal position in the document flow. The element can be moved using the `top`, `bottom`, `left`, and `right` properties. The element still takes up its normal space in the document flow, so other elements will be positioned as if it were still in its original position.
- `absolute`: This value positions the element relative to its nearest positioned ancestor, if any; otherwise, it is positioned relative to the initial containing block. The element is removed from the document flow and other elements will be positioned as if it were not there. This value is often used to position elements inside a container element.
- `fixed`: This value is similar to `absolute`, but the element is positioned relative to the viewport instead of a containing element. This means that the element will stay in the same position even if the user scrolls the page.
- `sticky`: This value is a relatively new addition to the `position` property. It acts as a hybrid of `relative` and `fixed` positioning. The element is positioned relative to its normal position in the document flow until the viewport scrolls to a certain point, at which point it "sticks" to the viewport and acts like a `fixed` positioned element.

When elements are positioned using `relative`, `absolute`, or `fixed`, they create a stacking context. The stacking context is the order in which elements are layered on top of each other on the page. The order is determined by a combination of the `z-index` property and the order in which the elements are defined in the HTML document. Elements that have a higher `z-index` value are layered on top of elements with lower `z-index` values.

When an element has a `position` value of `static`, it does not create a stacking context. However, if an element has a `position` value of `relative`, `absolute`, or `fixed`, it creates a stacking context, even if it has a `z-index` value of `auto`.

In summary, `position` property in CSS allows us to position elements on the page in different ways, and `sticky` is a relatively new value that allows for an element to stick to the viewport at a certain point. Stacking context is important for understanding how elements are layered on top of each other, and it is created when an element has a `position` value of `relative`, `absolute`, or `fixed`.

