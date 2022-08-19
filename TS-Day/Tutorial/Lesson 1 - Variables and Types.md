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



