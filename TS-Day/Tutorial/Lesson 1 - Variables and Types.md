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

## Switch Scope

Not adding the keyword `break` will fall through the `case` underneath. A quick modification of the previous example shows that the value `1` will now print `test2` twice because the value `1` gets into the `case 2`.

```tsx
function switchFunction(a: number): void {
    switch (a) {
        case 1:
            let variableInCase1 = "test";
            console.log(variableInCase1);
        case 2:
            let variableInCase2 = "test2";
            console.log(variableInCase2);
            break;
        default:
          console.log("Default");    
    }
}
switchFunction(1);
switchFunction(2);
switchFunction(3);
```

```
test
test2
test2
Default
```

To avoid stumbling into a situation where variables are shared across cases, it is suggested to use curly braces for each case

```tsx
function switchFunction(a: number): void {
    switch (a) {
        case 1: {
            let variableInCase1 = "test";
            console.log(variableInCase1);
            break;
        }
        case 2: {
            let variableInCase1 = "test2";
            console.log(variableInCase1);
            break;
        }
    }
}
switchFunction(1);
switchFunction(2); 
```

```
test
test2
```

# The Multiple Methods of Declaring a String

## Strings on a single line

A string is made of characters. It can be assigned a single quote or a double quote. A string’s content can be a number but will behave as characters if between quotes. Both single and double quotes are accepted. However, the guideline of the TypeScript project uses a double quote.

```js
let w = "Value1";
let x = "this is a string with the value " + w;
let y = 'this is a string with the value ' + w;
let z = `this is a string ${w}`;
console.log(w,x,y,z)
```

```
Value1 this is a string with the value Value1 this is a string with the value Value1 this is a string Value1
```

TypeScript can write strings on multiple lines without requiring the use of the backslash *n* `\n` that is required by JavaScript.

```tsx
let multiline1 = "Line1\n" + "Line2\n" + "Line3\n";

let multiline2 = `Line1 
Line2 
Line3`;

console.log(multiline1);
console.log(multiline2);
```

```
Line1
Line2
Line3

Line1 
Line2 
Line3
```

Inside the backquote, every changed line will be considered as if you were explicitly using the `\n`. The result of the string interpolation produces multiple strings with backslash *n*.


# What is a Number in TypeScript?

Another common primitive is the number. Since TypeScript is a superset of JavaScript, numbers work the same way in both languages. The openness of JavaScript allows for a broad set of numbers. Integers, signed floats, or unsigned floats are permitted. By default, a number will be base 10.

## Number base

You can also assign base 16 (hexadecimal), base 8 (octal) or base 2 (binary) with the prefix `0x`, `0o` and `0b`, though they’re rarely used

```tsx
let dec: number = 10;
let hex: number = 0x10;
let octo: number = 0o10;
let bin: number = 0b10;
console.log("Here are 4 numbers", dec, hex, octo, bin);
```

```
Here are 4 numbers 10 16 8 2
```

**Like most variables in TypeScript, there is no need to explicitly mark the variable type at the time of declaration. TypeScript can infer the type. The following code is the same as the code above. `.**

However, the following code does **not** define the four variables as `number`.

```js
const dec2 = 10; 
const hex2 = 0x10; 
const octo2 = 0o10; 
const bin2 = 0b10; 
console.log("Here is 4 numbers", dec2,hex2,octo2,bin2);
```

The type is actually the value meaning that **only** those values are acceptable. The difference between this snippet and the one before is `let` and `const`. With `let`, the variable may be reassigned at any time during the life of the variable, hence the narrowest type that TypeScript can infer is `number`.

However, in the last example with `const`, TypeScript knows that the value will not change, hence it can narrow the type down to the only value possible.



## Separator

A numeric separator is a feature that simplifies how we write numbers. A long number can be hard to read and adding a separator can reduce confusion. When writing a number, you can use the underscore symbol to mark every thousand, for example. There is no rule on where to place a group separator other than it must be between two numbers.

```tsx
const numericSeparator1 = 560000067;
const numericSeparator2 = 560_000_067;
const numericSeparator3 = 5_6_0_000_0_6_7;
const numericSeparator4 = Number(5_000);
const numericSeparator5 = Number("5_000"); // Nan 
const numericSeparator6 = parseInt("5_000");  
const numericSeparator7 =  0xFAB_F00D; 
const numericSeparator8 =  0b1111_11111000_11110000_00001100;
console.log(numericSeparator1)
console.log(numericSeparator2)
console.log(numericSeparator3)
console.log(numericSeparator4)
console.log(numericSeparator5)
console.log(numericSeparator6)
console.log(numericSeparator7)
console.log(numericSeparator8)
```

```
560000067
560000067
560000067
5000
NaN
5
262926349
267972620
```



# Booleans, Functions, and Objects

## Boolean primitive type

A boolean value is the most basic primitive in JavaScript and it remains the same with TypeScript. Boolean values restrict the assignment to two values: `true` and `false`. These terms are case sensitive – only the **lowercase** format is accepted.

```tsx
let b: boolean = true;
console.log(b);
```

```
true
```

You cannot assign the value `0` or `1`, or the `true` or `false` values using any upper case letters.

> Note: The following case shows two cases that TypeScript will not ❌ let you compile.
>
> ```tsx
> let bWithUumber: boolean = 0;
> let bWithUpperCase: boolean = TRUE;
> ```



## The `Boolean` function

TypeScript, like JavaScript, lets you invoke a `Boolean` function. This function proves handy to convert different types into a boolean type.

Typescript follows JavaScript rules, hence few values can return surprising results. For example, `Boolean("false")` will return `true` and `Boolean("not false")` will return `true;`.

```tsx
console.log(Boolean(false)); // False
console.log(Boolean("false")); // True
console.log(Boolean("not false")); // True
```



## Boolean objects

The boolean object behaves like the boolean function. One difference is that the result is not a `boolean` but an object that wraps the boolean value. The following outputs are objects like `[Boolean: false]`instead of the primitive variable value of `false`.

```tsx
console.log(new Boolean(false)); // False
console.log(new Boolean("false")); // True
console.log(new Boolean("not false")); // True
```

```
[Boolean: false]
[Boolean: true]
[Boolean: true]
```
# Avoiding `any` at Any Time Possible

We must avoid (as much as possible) the type `any`, principally because it can hold any value and therefore doesn’t enforce any protections. If you are integrating an existing JavaScript project with TypeScript, every variable will be, by default, set to `any` until they are defined.

The following code has a response of type `any` on **line 8**. Unfortunately, the response can be a string or a JSON object of any form. It is possible to mitigate this issue with *casting*, which you will see later to not propagate the `any` further in the code.

```tsx
function get(url: string) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("GET", url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
    });
}
```



```tsx
let myAnyString: any = 123;
console.log(myAnyString.length);
```

```
undefined
```

The danger is that the function may not be available. For example, say you set a variable with a number value that calls for an array of the function `.length`. This will transpile, but raise a runtime exception because a number doesn’t have a length function in the browser, and return `undefined` when running under Node js.

## Understanding and using the void type

The `void` type can’t hold any data; it can only be `undefined` or `null` if the `strictNullChecks` compiler option is off.

The code below shows the TypeScript compiler not happy with a variable of type `void` set to a `string` value:

```tsx
let whatCanIHold: void;
whatCanIHold = undefined;
whatCanIHold = "something";
```



## When to use the `void` type

`void` is only really useful for function return types, to show there is nothing we want to return

```tsx
function logMessage(message: string): void {
  console.log(message);
}
```

> ERROR!

```tsx
function logMessage(message: string): void {
  return message
}
```

```
index.ts(2,3): error TS2322: Type 'string' is not assignable to type 'void'.
```


# Mutable and Immutable Arrays

## Mutable arrays

Arrays in TypeScript are exactly like the ones in JavaScript in terms of features. The difference is that TypeScript assigns a type to the list. 

The syntax, as shown below, utilizes square brackets `[]` with the actual type before the brackets and after the colon `:` like so:

```tsx
let a: number[];
```

TypeScript **infers** that the first one is a `number` and the second is a `string`. 

```tsx
let arrayOfNumber = [1, 2, 3]; 

let arrayOfString = ["string", "array", "only"];
```

Using multiple types will require you to evaluate what the type of each value is before using an individual item of the array. This is because the variable’s operations are type-dependent. There is an equivalent syntax that uses the generic `Array<T>`. Both are the same.

```tsx
let usingArraySyntax: Array<number> = [1, 2, 3]; 
```

```tsx
let multipleTypeArray = [1, true, 3]; 
// Same as:
let multipleTypeArrayExplicit: (number | boolean)[] = [1, true, 3]; 
```

It is important to note that you can also instantiate a strongly-typed object array. This is equivalent to creating a new array without assigning any values.

```tsx
let myArray = new Array<number>();
printArray(myArray);

// Is the same as:
let myArray2: Array<number> = [];
printArray(myArray2);

// Is the same as:
let myArray3: number[] = [];
printArray(myArray3);

function printArray(a: number[]): void {
    console.log(`Before: ${a}`);
    a.push(1);
    console.log(`After: ${a}`);
}
```

As with the mutable array, there are two ways to write a read-only collection.

The first approach is to use `ReadonlyArray<T>` instead of `Array<T>`.

```tsx
let list: ReadonlyArray<number> = [1, 2];
list.push(3);
console.log(list);
```

The code above does not compile because you cannot mutate the array with `push`. This error is interesting and introduces the second way to write a read-only collection.

```tsx
let list: readonly number[] = [1, 2];
list.push(3);
console.log(list);
```

What is the difference between a constant array and a read-only array?” The answer is that a constant array won’t let you assign values to a list while a read-only array blocks you from changing values.

```tsx
const list1: number[] = [1, 2];
list1.push(3); // Legit because list1 is not re-assigned.
// list1 = [4, 5]; // ERROR: We cannot reassign a constant
```

```tsx
let list1: readonly number[] = [1, 2];
// list1.push(3); // Error, cannot mutate the content 
list1 = [4, 5]; // Legit, content is not mutated, we create a new list
```

What is the inferred type by the control flow analysis for this array?

```tsx
let myArray = [];
myArray[0] = 5;
myArray[1] = "aString";
myArray[2] = true;
```

> Answer: any[]

What is the infered type by the control flow analysis for this array at **line #1**?

```tsx
let myArray = []; // LINE #1
myArray.push(1);  // LINE #2
myArray;          // LINE #3
```

> Answer: any[]

What is the infered type by the control flow analysis for this array at **line #2**?

> Answer: any[]

What is the infered type by the control flow analysis for this array at **line #3**?

> Answer: number[]

The last question may surprise you. The empty array is an evolving type that will be analyzed during the “flow” of the code, meaning depending on what happens with the following operations. Functions like `push`, `shift`, `unshift`, or setting directly to an index a value `myArray[index] = value` will transform the type. The type is finally attributed once it stops changing, hence question #4 gets to its real type at the end of the code, not before, which could be anything.

# The Primitive Type never

The type `never` means that nothing occurs. It is used when a type guard cannot occur or in a situation where an exception is always thrown. There is a difference between `void` and `never`. A function that has the explicit return type of `never` won’t allow your code to return `undefined`, which is different from a `void` function that allows code to return `undefined`.

```tsx
function functionThrow(): never {
    throw new Error("This function return never");
}
```

The `never` type is a subtype for every type. Hence, you can return `never` (for example, throwing an exception) when a return type is specified to be void or string, but cannot return a string when explicitly marked as `never`.

TypeScript can benefit from the `never` type by performing an exhaustive check. An exhaustive check verifies that every possibility (for all types in the union or all choices in an enum) is handled. The idea is that TypeScript can find an unhandled scenario as early as design-time and also at compilation time. It works by having a potential path that falls under the `else` condition, which returns `never`.

However, when all types of a union or enum cause the code to return something other than `never`, the compiler won’t complain. Using `never` is helpful when code around multiple type values evolve. When an option is added, for example, to a union or enum, TypeScript will compute that the function can return `never` and not compile. Since version 2.0, TypeScript can find out if the code was entered in the default case (or with `else` case if you are not using the switch statement).

For example, in the code below, there is an `enum` with two items. TypeScript knows that only two cases are possible and the default (`else`) case cannot occur. This insight of TypeScript is perfect since the function return type only accepts a `string` and does not accept `never`. If in the future you add a new item from enum, (for example, a `ChoiceC`, without adding a new case in the switch statement), then, the code can call the `unhandledChoice` function which returns `never`.

```tsx
enum EnumWithChoices {
    ChoiceA,
    ChoiceB,
    ChoiceC,
}

function functionReturnStringFromEnum(c: EnumWithChoices): string {
    switch (c) {
        case EnumWithChoices.ChoiceA:
            return "A";
        case EnumWithChoices.ChoiceB:
            return "B";
        default:
            return unhandledChoiceFromEnum(c);
    }
}

function unhandledChoiceFromEnum(x: never): never {
    throw new Error("Choice not defined");
}
```

```
/usr/lib/node_modules/ts-node/src/index.ts:245
    return new TSError(diagnosticText, diagnosticCodes)
           ^
TSError: ⨯ Unable to compile TypeScript:
index.ts(14,44): error TS2345: Argument of type 'EnumWithChoices.ChoiceC' is not assignable to parameter of type 'never'.

    at createTSError (/usr/lib/node_modules/ts-node/src/index.ts:245:12)
    at reportTSError (/usr/lib/node_modules/ts-node/src/index.ts:249:19)
    at getOutput (/usr/lib/node_modules/ts-node/src/index.ts:362:34)
    at Object.compile (/usr/lib/node_modules/ts-node/src/index.ts:395:32)
    at Module.m._compile (/usr/lib/node_modules/ts-node/src/index.ts:473:43)
    at Module._extensions..js (internal/modules/cjs/loader.js:789:10)
```

In cases where TypeScript is unable to logically identify a variable as a specific type, it will set the value to `never`. In the following example, the `else` case is  impossible because the `data` variable can only be `number` or `boolean`, however, the `else` is coded anyway. The value of the variable `data` is, in that case, `never`. 

```tsx
declare function ajaxCall(): number | boolean;
let data : number | boolean = ajaxCall();
if (typeof data == "number"){
  console.log(`The data is a number type: ${typeof data}`);
} else if (typeof data == "boolean"){
  console.log(`The data is a boolean type: ${typeof data}`);
} else{
  console.log(`Impossible ELSE case: ${typeof data}`); // of type never here
}
```



# Unknown: A Better any

The `unknown` type is half a specific explicit type and half the type `any` which allows everything. Declaring a variable as `unknown` allows us to set a wide variety of types without allowing unwanted access to properties or the value of a type. The following code demonstrates that a variable with type `any` can be assigned a string and then used with a function of the `string` type.

```tsx
let variable1: any;
variable1 = "It is a string";
console.log(variable1.substr(0,2)) // Output "it"
variable1 = 1;
console.log(variable1.substr(0,2)) // Crash
```

```
It

/usercode/index.ts:5
console.log(variable1.substr(0,2)) // Crash
                      ^
TypeError: variable1.substr is not a function
    at Object.<anonymous> (/usercode/index.ts:5:23)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Module.m._compile (/usr/lib/node_modules/ts-node/src/index.ts:473:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Object.require.extensions.(anonymous function) [as .ts] (/usr/lib/node_modules/ts-node/src/index.ts:476:12)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at Object.<anonymous> (/usr/lib/node_modules/ts-node/src/bin.ts:158:12)
```



Changing the type from `any` to `unknown` indicates to TypeScript that the type can receive any value but should be used cautiously. It does not allow the function to be invoked.

```tsx
let variable2: unknown;
variable2 = "It is a string";
console.log(variable2.substr(0,2)) // Does not compile here
variable2 = 1;
console.log(variable2.substr(0,2)) // Does not compile here
```

The only way to access hidden properties or values is to explicitly tell TypeScript a variable’s type. This can be done by *casting* or using a *type assertion*. Here is an example that lets an `unknown` variable use the `string` function, `substr`. `variable3` is of `unknown` type but is explicitly cast by asserting its type as `string`.

Forcing a type is not recommended because it can lead to specifying the wrong one. For example, `variable3` may be a `number` asserted to be a `string`. Asserting an `unknown` type is dangerous and should be used with caution.

```tsx
let variable3: unknown;
variable3 = "It is a string";
let variable3String = variable3 as string;
console.log(variable3String.substr(0,2)) 
```

```
It
```

In case you need to display a value in an object that has many `undefined/null` (or optional) fields, several checks are required. The following example shows that only the last object displays the string because the others are nested with `undefined` values.

```tsx
interface ObjectC {
    m3: string;
}
interface ObjectB {
    m2?: ObjectC;
}
interface ObjectA {
    m1?: ObjectB;
}

function print(o: ObjectA): void {
    if (o.m1) {
        if (o.m1.m2) {
            console.log(o.m1.m2.m3);
        }
    }
}

const obj1: ObjectA = {
    m1: undefined,
};
const obj2: ObjectA = {
    m1: {
        m2: undefined,
    },
};
const obj3: ObjectA = {
    m1: {
        m2: {
            m3: "Yeah!",
        },
    },
};
print(obj1);
print(obj2);
print(obj3);
```

```
Yeah!
```



TypeScript versions 3.7 and up allow us to shortcut the conditions of `null` and `undefined` by using *optional chaining*. Optional chaining uses `?.` and returns `undefined` if the chain of `?.` contains a property that is `null` or `undefined`. Otherwise, it returns the value. If you change the previous example to use optional chaining, the code is reduced to:

```tsx
interface ObjectC {
    m3: string;
}
interface ObjectB {
    m2?: ObjectC;
}
interface ObjectA {
    m1?: ObjectB;
}

function print(o: ObjectA): void {
  if(o.m1?.m2){
    console.log(o.m1.m2.m3);
  }
}

const obj1: ObjectA = {
    m1: undefined,
};
const obj2: ObjectA = {
    m1: {
        m2: undefined,
    },
};
const obj3: ObjectA = {
    m1: {
        m2: {
            m3: "Yeah!",
        },
    },
};
print(obj1);
print(obj2);
print(obj3);
```



With TypeScript, since version 3.7, it is possible to use `??` to avoid the if statement.

```tsx
function getValue(): string | undefined{
  if (Math.random() > 0.5){
    return undefined;
  }
  return "Good";
}

let value = getValue() ?? "Default";
console.log(value);
```

The code result can be Good or Default, they are random.


# Literal Type to Narrow Primitive Type

## Literal type

A literal type means that the value is an **exact one**. For example, a string literal of “test” would mean that the value of the variable can only be “test”.

## String literals

A string literal is a way to define a string that limits the potential values to be used. It’s used mostly with a union, which allows specifying more than one string value. Imagine that you allow several strings’ values but want to limit the choice to specific ones. You could use an enumeration, but a string may be more clear or compatible with existing libraries. For example, you may want to limit the value to “north”, “south”, “east”, or “west.”

```tsx
let direction: string = "no-where" // We desired to be "north", "south", "east", "west".
```

To create a string literal, define each value separated by the pipe symbol `|` (union of values). TypeScript will not compile if it goes outside the defined range. The code below does not compile because `yourDirection` is declared to be of the `Direction` string literal type. Changing it to a `string` allows us to assign any string or change the value to one of the four defined types, and will fix the transpilation.

```tsx
type Direction = "north" | "south" | "east" | "west";
let myDirection:Direction = "north";
// let yourDirection:Direction = "no-where"; // Does not compile
```

A string literal can be assigned without `type` by assigning a string value to with the `const` declaration or `as const`.

```tsx
const stringLit1 = "oneValueOnly";
let stringLit2 = "oneValueOnly" as const
```





## Number literals

Similarly, it is possible to use numbers as a set of values. Using multiple defined numbers is convenient if you have a set of values that you accept but are not all numbers.

```tsx
type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
let menuSize: Column = 4;
let mainContent: Column = 100; // Does not compile because only accept 1 to 12
```

## Literal mixed type

It is possible to also create a mixed type that causes the literal to be of multiple types with the union. In the following code, you have a line that does not compile because one of the literals is not covered, causing the `never` type to be assigned even though it cannot be compiled.

Uncommenting the `false` option would result in compilable code since all values of the type are handled.

```tsx
type OptionOpen = true | false | "true" | "false"; // Actuall : boolean | "true" | "false"

function openWindow(option: OptionOpen): void {
   if(option === "true" || option === true){

   } else if (option === "false" /* || option === false*/){

   } else{
     const c: never = option;
   }
}
```




