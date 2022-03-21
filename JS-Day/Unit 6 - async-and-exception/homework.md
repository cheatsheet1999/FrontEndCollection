### Homework 1

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

### Homework 2
```js
Consider the following code. What will the output be, and why?
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x); // 1
    }
    console.log(x); // undefiend - scope issue?
    console.log(y); // 2
})();

/*
1
undefiend
2

*/
```



### Homework 3
```js
var reverse = function(x) {
    const number = Math.abs(x).toString().split('').reverse().join('');

    if (number > Math.pow(2, 31) - 1) {
        return 0
    }

    return x < 0 ? -number : number;
};
```


### Homework 4

```js
The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        // nextListItem();
        setTimeout( nextListItem, 0 );
    }
};

```


### Homework 5

```js
let reverseWords = function(s) {
     return s.split(" ").reverse().filter(w => w !== "").join(" ");
};
```
