According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

```JS
/** 
 * rules:
 * live -> die = -1
 * die -> live = 2 
 */
var gameOfLife = function(board) {
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[0].length;j++) {
            let cell = board[i][j];
            let neighbors = getNeighbors(i,j,board);
            if (cell == 0 && neighbors == 3) {
                board[i][j] = 2
            }
            if (cell == 1 && (neighbors < 2 || neighbors > 3)) {
                board[i][j] = -1;
            }
        }
    }
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] == -1) board[i][j] = 0;
            if (board[i][j] == 2) board[i][j] = 1;
        }
    }
};


var getNeighbors = function(r, c, board) {
    let dirs = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
    let count = 0;
    dirs.forEach(function(d) {
        let next = [r + d[0], c + d[1]];
        if(next[0] >= 0 && next[0] < board.length && next[1] >= 0 && next[1] < board[0].length) {
             if (Math.abs(board[next[0]][next[1]]) == 1) {
                 count += 1; 
             }
        }
    })
     

    return count;
}
```
