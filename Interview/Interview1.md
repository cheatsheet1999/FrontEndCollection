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


## 4. What is the difference about arrow function?
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

<img width="1001" alt="Screen Shot 2022-06-09 at 14 49 46" src="https://user-images.githubusercontent.com/37787994/172951209-af85c2c3-94ee-4ffd-9d58-4e1441f12833.png">


12. react lifecycle phases

mount => update => unmount

**Mount phases**
constructor()
getDerivedStateFromProps()
render()
componentDidMount()

**update**
getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

**unmount phases**
componentWillUnmount()
