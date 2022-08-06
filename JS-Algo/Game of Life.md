According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

```JS
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let new_board = board.map(arr => ([...arr]));
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            liveOrDie(i, j);
        }
    }
    
    function get(row, col) {
        if(typeof new_board[row] === "undefined" || typeof new_board[row][col] === "undefined") {
            return 0;
        } else {
            return new_board[row][col];
        }
    }
    
    function liveOrDie(row, col) {
        let neighbors = 
            get(row - 1, col - 1) +
            get(row - 1, col) +
            get(row - 1, col + 1) +
            get(row, col - 1) +
            get(row, col + 1) +
            get(row + 1, col - 1) +
            get(row + 1, col) +
            get(row + 1, col + 1);
        
        if(new_board[row][col] && (neighbors < 2 || neighbors > 3)) {
            board[row][col] = 0;
        } else {
            if(neighbors === 3) {
                board[row][col] = 1;
            }
        }
    }
};
```
