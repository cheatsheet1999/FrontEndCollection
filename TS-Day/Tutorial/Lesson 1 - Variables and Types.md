# Declaring a Variable

## Why should we avoid  of using`var`?

One issue with `var` is that the location of a variable makes it unpredictable. A variable declared using `var` is function-scoped when declared inside a function, but global-scoped when declared outside of a function. Also, `var` does not stop you from redefining the same variable, which overrides the initial declaration or initialization.

```js
function varFunction(){     
    var x = "111";    
    if(true){             
        var x = "999"; // Variable x redefined   
    }     
    console.log(x); 
}
varFunction()
```

```output
999
```



However, the new definition is contained within the scope of the function. For example, trying to output `x` from outside the function will return `undefined`.

```js
var x;
function varFunction(){     
    var x = "111";    
    if(true){             
        var x = "999";    
    }     
    console.log(x); 
}
varFunction()
console.log(x)
```

```
999
undefined
```



## Declaring with `let`

The keyword `let` sets  the lifespan of the variable at the block where it was declared. Curly braces here determine a block.

```js
function letFunction() {
    let x = "111";
    if (true) {
        let x = 999;
    }
    console.log(x); 
}
letFunction();
```

```
111
```

`var` brings confusion that TypeScript can handle by providing guidance. As a rule of thumb, `var` is never used since the adoption of `let` and `const` provides a cleaner scope definition.



## Declaring with `const`

The keyword `const` (short for constant) is similar to `let` in terms of the scope of its lifespan. However, it can only be initialized once: in its **declaration**. The restriction is powerful because it not only syntactically indicates that the purpose is not to change its value, but TypeScript will also ensure that no value can be set. It’s important to understand that if you have a **constant object**, the value of that object cannot change.

**However, you can set its name if a public member is available.**

```tsx
const user1 = { id: 1, name: "MyName1" };
const user2 = { id: 2, name: "MyName2" };

user1.name = user2.name; // Legit!
user1.id = 1000; // Legit !
```



The below code works because even though the list values change, the reference to the **list** does not. The same holds true with an **object**. You can change values inside an object, but not assign a new object to the variable.

```tsx
function constFunction() {
    const myList = [1, 2, 3];
    myList.push(4);
    console.log(myList);
}
constFunction();
```

```
[1, 2, 3, 4]
```


Here is a similar example with two objects. The `obj1` is declared with `let` and can be assigned using `=`. However, `obj2` cannot be re-assigned. Nevertheless, even though it was declared as a `const` and that the reference cannot change, the value inside the object can

```js
function constChangeObject() {
    let obj1 = { p1: "p1value" };
    obj1 = { p1: "p1value changed" };

    const obj2 = { p2: "p2value" };
    obj2 = { p2: "Does not compile" };
    obj2.p2 = "Work!";
}
```



## What about type?

Briefly, specifying the type happens after naming the variable with the help of colons.

```js
var varName1: number;
let varName2: string;
const varName3: boolean;
```

In either case, implicit or explicit, once a variable type is assigned, TypeScript will respect and enforce it. Avoiding type changes allows consistency in the code.



## TypeScript Scope is JavaScript Scope

### Shadowing scope

The first case is *shadowing*. This occurs when one variable is declared twice, in an outer scope, and an inner scope. For example, if you have two loops and both of them are using the variable `i`, TypeScript is smart enough to understand that both declarations are for two different variables. However, it is confusing and susceptible to error, hence it is not recommended even if the code will transpile without a problem.

```tsx
function f1(i: number) {
    console.log("Parameter value", i);
    let i: number = 10; 
}
f1(0);
```

The code above will not allow the parameter and a `let` variable define the same variable name. TypeScript will find and throw an error that the variable has been duplicated.

In the next example, the variable `i` is also of type `number` but could have been something else. In the following code, you can see that each scope has its own set of variables. In the previous example, TypeScript finds a variable already defined for the scope.

```tsx
function f3() {
    let i: number = 10; // Shadow #1
    if(true){
        let i: string = "Now a string value";
        console.log("Variable in IF after value:", i);
    }
    console.log("Variable value:", i);
}
f3();
```



## Capturing scope

This occurs when you have a variable that you define in an inner scope and then use inside a function that you assign to another scope. During the assignment of the function, the variable defined in the inner scope will be captured, like a snapshot, and when leaving the scope, the function declared before the inner scope will still have the value of the variable.

```tsx
function mainFunction() {
    let innerFunction;
    if (true) {
        // Environment for capturing start here
        let variableCapturedByTheInnerFunction = "AvailableToTheInnerFunction";
        innerFunction = function() {
            return variableCapturedByTheInnerFunction;
        }; // Environment for capturing stop here
    }
    return innerFunction();
}
console.log(mainFunction());
```

```
AvailableToTheInnerFunction
```

```tsx
function mainFunction2() {
    let innerFunction;
    if (true) {
        // Environment for capturing start here
        let variableCapturedByTheInnerFunction = "AvailableToTheInnerFunction";
        innerFunction = function() {
            return variableCapturedByTheInnerFunction;
        }; // Environment for capturing stop here
        variableCapturedByTheInnerFunction = "Changed"
    }
    return innerFunction();
}
console.log(mainFunction2());
```

```
Changed
```

***The following code does not leverage capturing. The function loops five times from lines 10 to 14 and adds the function to a list. Then, every function is invoked. The result below should be expected.***

```js
function mainFunction3() {
    let innerFunction;
    let listFunctions = [];
    for (let i = 10; i < 15; i++) {
        innerFunction = function(param1: number) {
            return param1;
        }
        listFunctions.push(innerFunction(i));
    }
    for (let k = 0; k < 5; k++) {
        console.log(listFunctions[k]);
    }
}
mainFunction3();
```

```
10
11
12
13
14
```

Within a particular scope, you can *freeze* a variable. Lines 5 and 10 create a scope by generating an anonymous function. This function then passes a value that will be available inside the function `f` at any time in the future.

```js
function mainFunction2() {
    let innerFunction;
    let listFunctions = [];
    for (let i = 10; i < 15; i++) {
        innerFunction = (function(param1: number) {
            let f = function() {
                return param1;
            };
            return f;
        })(i * 100);
        listFunctions.push(innerFunction);
    }
    for (let k = 0; k < 5; k++) {
        console.log(listFunctions[k]());
    }
}
mainFunction2();
```

```
1000
1100
1200
1300
1400
```



## Declaration scope

As mentioned, `let` and `const` can be declared once per *scope*. This means you can have several variables with the same name, but only the one in the scope of invocation is visible.

```js
let x = 1;
console.log("Outside: " + x)
function myFunction(){
  // console.log("Inside before re-declaring: " + x)
  let x = 2;
  console.log("Inside after re-declaring: " + x)
  if (x == 2) {
    let x = 3;
    console.log("Inside IF : " + x)
    function mySecondFunction(){
      // console.log("Inside-Inside before: " + x)
      let x = 4;
      console.log("Inside-Inside after: " + x)
    }
    mySecondFunction();
  }
}
myFunction();
```

The code above has two commented lines of code. Uncommenting the code will result in two errors.


