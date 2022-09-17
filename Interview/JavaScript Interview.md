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
- A closure is the combination of a function enclosed with references to its surrounding state, which is the lexical environment. In other words, a closure gives us access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, we first define a function inside another function and return it or pass it to another function. The inner function then will have access to the variables in the outer function scope, even after the outer function has returned.

**This is an easy example of closure**
```js
function outer() {
    let a = 3;

    function inner() {
        let b = 4;
        console.log(a + b);
    }

    inner();
}

outer()
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



---
2. scope in javascript
3. new feature introduced in ES6
4. arrow function difference




5. what is closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```js
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

6. What is promise
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

7. what is async await

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

8. what is React

9. what is virtual DOM

10. difference between class component and function component

11. what goes into a class component, declare what at the first place?

**class component example**

```js

import React, { Component } from "react";
 
class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <div style={{margin:'50px'}}>
               <h1>Welcome to Geeks for Geeks </h1>
               <h3>Counter App using Class Component : </h3>
               <h2> {this.state.count}</h2> 
               <button onClick={this.increase}> Add</button>
 
            </div>
        )
    }
}
 
export default ClassComponent;
```




