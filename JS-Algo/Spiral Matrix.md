#### Given an `m x n matrix`, return all elements of the `matrix` in spiral order.

<img width="448" alt="Screen Shot 2021-11-05 at 7 04 45 PM" src="https://user-images.githubusercontent.com/37787994/140594218-7d5b3c33-1978-4c92-9b66-e73a45c44fc5.png">


![IMG_E07AD66F1FEE-1](https://user-images.githubusercontent.com/37787994/140594249-b08ebc9c-e6a6-4b29-8278-4ee8ffb8f6c5.jpeg)


```JS
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 
 
var spiralOrder = function(matrix) {
    const res = [];
    let startRow = 0, endRow = matrix.length - 1, startCol = 0, endCol = matrix[0].length - 1;
    while(startRow <= endRow && startCol <= endCol) {
        //traverse every column [[0,0], [0,1], [0,2]....] so we can add the first row
        for(let col = startCol; col <= endCol; col++) {
            res.push(matrix[startRow][col]);
        }
        //traverse the second side, so start from the 2nd row because the first row is alredy in stack.
        for(let row = startRow + 1; row <= endRow; row++) {
            res.push(matrix[row] [endCol]);
        }
        for(let col = endCol - 1; col >= startCol; col--) {
            if(startRow === endRow) break;
            res.push(matrix[endRow][col]);
        }
        for(let row = endRow - 1; row > startRow; row--) {
            if(startCol === endCol) break;
            res.push(matrix[row][startCol])
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return res;
};
```
