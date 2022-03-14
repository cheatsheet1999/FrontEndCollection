
### Homework 5
```js
'use strict'

let card = ['Of Spades', 'Of Hearts', 'Of Diamonds', 'Of clubs'];
console.log('First Printout')
// First Print out

let res1 = [];
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 13; j++) {
        // console.log(`${j + 1} ${card[i]}`);
        res1.push(`${j + 1} ${card[i]}`)
    }
}
console.log(...res1);

console.log('\nSecond Printout')
let res2 = [];
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 13; j++) {
        res2.push(`${Math.floor(Math.random() * 13) + 1} ${card[i]}`);
    }
}
console.log(...res2);

console.log('\nThird Printout')
let res3 = [];
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 13; j++) {
        res3.push(`${Math.floor(Math.random() * 13) + 1} ${card[Math.floor(Math.random() * 3)]}`);
    }
}
console.log(...res3)
```


```
First Printout
1 Of Spades 2 Of Spades 3 Of Spades 4 Of Spades 5 Of Spades 6 Of Spades 7 Of Spades 8 Of Spades 9 Of Spades 10 Of Spades 11 Of Spades 12 Of Spades 13 Of Spades 1 Of Hearts 2 Of Hearts 3 Of Hearts 4 Of Hearts 5 Of Hearts 6 Of Hearts 7 Of Hearts 8 Of Hearts 9 Of Hearts 10 Of Hearts 11 Of Hearts 12 Of Hearts 13 Of Hearts 1 Of Diamonds 2 Of Diamonds 3 Of Diamonds 4 Of Diamonds 5 Of Diamonds 6 Of Diamonds 7 Of Diamonds 8 Of Diamonds 9 Of Diamonds 10 Of Diamonds 11 Of Diamonds 12 Of Diamonds 13 Of Diamonds

Second Printout
9 Of Spades 11 Of Spades 9 Of Spades 1 Of Spades 2 Of Spades 9 Of Spades 6 Of Spades 7 Of Spades 13 Of Spades 4 Of Spades 6 Of Spades 10 Of Spades 13 Of Spades 3 Of Hearts 4 Of Hearts 9 Of Hearts 3 Of Hearts 6 Of Hearts 10 Of Hearts 4 Of Hearts 5 Of Hearts 8 Of Hearts 13 Of Hearts 2 Of Hearts 1 Of Hearts 1 Of Hearts 5 Of Diamonds 13 Of Diamonds 11 Of Diamonds 1 Of Diamonds 8 Of Diamonds 1 Of Diamonds 8 Of Diamonds 1 Of Diamonds 10 Of Diamonds 1 Of Diamonds 2 Of Diamonds 10 Of Diamonds 1 Of Diamonds

Third Printout
10 Of Hearts 6 Of Diamonds 12 Of Diamonds 5 Of Diamonds 1 Of Hearts 2 Of Spades 13 Of Diamonds 1 Of Diamonds 9 Of Diamonds 4 Of Hearts 5 Of Hearts 7 Of Spades 5 Of Hearts 4 Of Spades 3 Of Hearts 13 Of Spades 8 Of Diamonds 4 Of Hearts 4 Of Spades 1 Of Spades 13 Of Diamonds 8 Of Spades 12 Of Diamonds 4 Of Hearts 3 Of Hearts 2 Of Spades 7 Of Hearts 10 Of Hearts 1 Of Hearts 4 Of Spades 1 Of Spades 6 Of Spades 6 Of Diamonds 3 Of Hearts 12 Of Diamonds 5 Of Diamonds 7 Of Hearts 13 Of Spades 9 Of Diamonds

```

### Homework 6 - Some issues

```js

let convertStringToNumber = (str) => {
    let base = 'a'.charCodeAt() - 1;
    let newRes = str.split(' ');

    let sum = 0;
    let strObj = {};

    for(let i = 0; i < newRes.length; i++) {
        sum = 0;
        for(let j = 0; j < newRes[i].length; j++) {
            sum += newRes[i][j].charCodeAt() - base
        }
        strObj[sum] = [newRes[i]]

        console.log('\n')
    }

    console.log(strObj)
}

convertStringToNumber('abc cde adb dfb def ee abcd cc')

```

```
{
  '6': [ 'cc' ],
  '7': [ 'adb' ],
  '10': [ 'abcd' ],
  '12': [ 'dfb' ],
  '15': [ 'def' ]
}

Looks like we can't push element inside an `object`, so bug will appear when there are two string with same value. Only one would show.
```
