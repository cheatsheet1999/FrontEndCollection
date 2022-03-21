```js
function printing() {
   console.log(1); 
   setTimeout(function() { console.log(2); }, 1000); 
   setTimeout(function() { console.log(3); }, 0); 
   console.log(4);
}
printing();
```

```
1
4
3
2
setTimeout function will delay the output
```


```js
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

```

```
4
4
4
4
Closure issue
```

```js
for (let i = 0; i < 4; i++) {
(function (i) {
  setTimeout(() => console.log(i), 0)
})(i)
}
```

```
0
1
2
3
A solution to clousure issue
```

```js
console.log("Before the timeout");
setTimeout(function() { console.log("In the timeout function"); }, 0);
console.log("After the timeout");
```

```
Before the timeout
After the timeout
In the timeout function

Same as the 1st question
```


```js
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

/*
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
*/

Mutable variable is accessible from closure

```



### Homework 5

```js
let reverseWords = function(s) {
     return s.split(" ").reverse().filter(w => w !== "").join(" ");
};
```
