## Why we need functions?
**The fact is, a lot of functions are not a good function  
Let's take a look at a example**

```js
function tenSquared() {
  return 10 * 10;
}

tenSquared();
```

**What about a 9 squared function? about 125 quared**

## Parameter - Don't repeat yourself
We don't want to write functions like that, repeat is the worst thing in programing.  
What could we do instead?  

**We write a more generalizable code piece**

```js
function squareNum(num) {
  return num * num;
}

squareNum(10);
squareNum(5);
```

**We can use num to represent any actual number withou repeating, that is what the parameter is for**

## Generalizing functions
`parameters` means we don't need to decide what data to run our functionality on until we run the function
- Then provide an actual value `argument` when we run the function   

### Higher order functions follow this same principle
- We may not want to decide exactly what some of our funcionality is until we run our function
