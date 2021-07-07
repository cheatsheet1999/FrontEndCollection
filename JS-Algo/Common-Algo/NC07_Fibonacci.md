NC07_Fibonacci

***O(n) Fibonacci***

```js
function Fibonacci(n) {
    let fib = [0, 1];
    let counter = 2;
    while(counter < n) {
        let nextFib = fib[0] + fib[1];
        fib[0] = fib[1];
        fib[1] = nextFib;
        counter++;
    }
    return n > 1 ? fib[0] + fib[1] : n;
}
module.exports = {
    Fibonacci : Fibonacci
};
```

