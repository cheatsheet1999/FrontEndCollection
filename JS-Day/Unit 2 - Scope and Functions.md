JS is the only language that supports 3 paradigms
  - Functional
  - object-oriented
  - async

### What is scope
- When and where variables, constants, and arguments are considered to be defined/visible/available
- Internally, when their memory is allocated, used, and released 
  - Memory release is through a process called garbage collection

```js
function f(x) {
  return x + 3;
}
f(5); // 8 
console.log(x); // x is not defined
```

### Four types of scoping
- Global Scope – ES5 
  - Objects declared (with var, let, and const) _outside of any function are global_
  - Visible everywhere in a JavaScript program (or an HTML document in Browser)
  - **use it without declaring** – not allowed under ‘strict’ mode

- Function Scope (ES5)
  - Objects declared inside a function (yes, anywhere!) are visible only to code that appears **inside that function** (and its embedded functions) 
  - Keyword ‘var’
- Block Scope
  - Objects declared inside a block are visible only to code that appears **inside that block** (and its embedded block) 
  - Keywords ‘let’ and ‘const’
- Module Scope
  - When module system is used, no global variables. They become module variables
  - Later in Module System

var is a function scope, and let is block scope


cost o = {name: 'john', age = 20}
o = {name: 'john1', age = 22} 
can't change because the "house is kept"

strict mode
- use variable before declaring
- using an object without declaring
- refered to w3cschool

### Deep and shallow copy

<img width="917" alt="Screen Shot 2022-03-09 at 16 41 11" src="https://user-images.githubusercontent.com/37787994/157557889-b96c8311-b462-415b-aa48-2d14c445a59d.png">

Deep copy: value is the same, but two memory blocks, simple type always deep copy

Shallow copy, only copy the refereence

It's just that when a primitive is passed you get a copy of the primitive and when an object is passed you get a copy of the memory location of the object.




### Exercise 

1.
```js
function f() {
    var a = 10;
    if (a > 5) {
        a = 7;
    }
    console.log(a);
}

// When executed, what value will be logged?
```

```
Ans: 7
Explain: Inside the if condition, 10 > 5, so a has been re-initialized to 7.
```
2.
```js
function f() {
    if(true) {
        var a = 5;
    }
    console.log(a);
}
f();
```

```
Ans: 5
Explain: the above program will always go inside the if condition, where a was initialized. a is in a function scope defined by using var, so it still can be accessed inside the function
```

3.
```js
function f() {
	a = 3;
}
f();
console.log(a);

4.
var a = 5;
function first() {
    a = 6;
}


function second() {
    console.log(a);
}
first();
second();

```
