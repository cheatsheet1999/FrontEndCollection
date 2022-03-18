### Homwork 1
```js
// 1. Write a JavaScript function to get the sum of an array without using any loop statement.

let arr = [1, 3, 2, 4];
let sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum)


// 2. Write a JavaScript function to filter false, null, 0 and blank values from an array without using any loop statement.
function filterValues(arr) {
    arr = arr.filter(Boolean)
    return arr;
}

console.log(filterValues([23, '', 'homework', true, null, false, 0]));

// 2nd way of doing it
function filterValues(arr) {
    return arr.filter(x => x);
}

console.log(filterValues([23, '', 'homework', true, null, false, 0]));

// Question 3

console.log(('9119').split('').map((val) => { return val * val}).join(''))

// Question 4

let str = "How can mirrors be real if our eyes aren't real"

console.log(str.split(" ").map((word) => {
    return word[0].toUpperCase() + word.substring(1);
}).join(" "));

```

### Homework 2

```js
let coordinates = [
    {id:"a",value:"31,49"},
    {id:"b",value:"44,67"},
    {id:"c",value:"93,6"},
    {id:"d",value:"20,16"},
    {id:"e",value:"68,53"},
    {id:"f",value:"71,8"},
    {id:"g",value:"61,90"},
    {id:"h",value:"34,97"},
    {id:"i",value:"21,63"},
    {id:"j",value:"19,84"},
    {id:"k",value:"0,81"},
    {id:"l",value:"6,76"},
    {id:"m",value:"43,64"},
    {id:"n",value:"18,64"},
    {id:"o",value:"10,61"},
    {id:"p",value:"37,27"},
    {id:"q",value:"44,88"},
    {id:"r",value:"75,63"},
    {id:"s",value:"99,46"},
    {id:"t",value:"28,51"},
    {id:"u",value:"88,79"},
    {id:"v",value:"47,21"},
    {id:"w",value:"18,66"},
    {id:"x",value:"84,100"},
    {id:"y",value:"75,92"},
    {id:"z",value:"32,33"}
]

let coordinatesArr = [];



for(let i = 0; i < coordinates.length; i++) {
    let coorObj = {};
    coorObj.x = coordinates[i].value.split(',')[0];
    coorObj.y = coordinates[i].value.split(',')[1];
    coordinatesArr.push(coorObj)
}


const distance = (coor1, coor2) => {
    let x = coor2.x - coor1.x;
    let y = coor2.y - coor1.y;
    return Math.sqrt((x*x) + (y*y));
};
const sortByDistance = (coordinatesArr, point) => {
    const sorter = (a, b) => distance(a, point) - distance(b, point);
    coordinatesArr.sort(sorter);
};
sortByDistance(coordinatesArr, {x: 71, y: 8});
console.log(coordinatesArr);
```
### Homework 3

```js
let sqrt = (x) => {
    return Math.sqrt(x);
}

console.log(sqrt(5))



// Question 2
let longestContinues = function(nums) {
    let counter = 0;
    return nums.reduce((acc, cur) => {
        counter = cur ? counter + 1 : 0;
        return Math.max(acc, counter);
    }, 0);
};


console.log(longestContinues([1,1,1,1,0,0,1,1]))


// Question 3

let longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    for(let i = 0; i < strs[0].length; i++) {
        for(let str of strs) {
            if(str[i] !== strs[0][i]) return str.slice(0, i);
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(["flower","flow","flight"]))


// Question 4
let fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};

console.log(fizzBuzz(15));
```


### Homework 6
```js
function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill(''));
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    // ugly brute force, improvements?
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return result;
}

console.log(matrix(4))
```
