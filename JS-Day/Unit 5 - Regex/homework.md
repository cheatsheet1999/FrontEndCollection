
```js
// 1. Write a JavaScript function to get the sum of an array without using any loop statement.

let arr = [1, 3, 2, 4];
let sum = arr.reduce((prev, accu) => prev + accu, 0);
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
