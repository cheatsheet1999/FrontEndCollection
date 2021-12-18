Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

<img width="579" alt="Screen Shot 2021-12-17 at 21 51 06" src="https://user-images.githubusercontent.com/37787994/146629416-4a634bdf-5bdb-4d38-ae60-dbb2488d8d97.png">

<img width="555" alt="Screen Shot 2021-12-17 at 21 51 30" src="https://user-images.githubusercontent.com/37787994/146629428-f619ddb3-9ab8-4da9-954c-b901f5ed859e.png">


Time complexity O(n + m)

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] === target) {
            return true;
        }
        else if(matrix[row][col] < target) {
            row++;
        }
        else {
            col--
        }
    }
    return false
};
```
