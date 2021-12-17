Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

<img width="587" alt="Screen Shot 2021-12-16 at 22 15 55" src="https://user-images.githubusercontent.com/37787994/146492786-26627ae9-cba8-450b-a5f7-1c39a74b6292.png">

```js
var fizzBuzz = function(n) {
    const output = [];
    
    for (let i = 1; i <= n; i++) {
        if ( i % 15 === 0 ) {
            output.push("FizzBuzz")
        } else if ( i % 5 === 0 ) {
            output.push("Buzz")
        } else if ( i % 3 === 0 ) {
            output.push("Fizz")
        } else {
            output.push(String(i));
        }
    }
    
    return output;
};
```
