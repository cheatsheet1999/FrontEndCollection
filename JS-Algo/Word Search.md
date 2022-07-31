Given an *m x n* grid of characters *board* and a string word, return *true* if *word* exists in the *grid*.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

<img width="652" alt="Screen Shot 2021-09-14 at 8 34 50 PM" src="https://user-images.githubusercontent.com/37787994/133366357-1fe35372-3f09-4469-8896-623228f9a933.png">


<img width="635" alt="Screen Shot 2021-09-14 at 8 35 12 PM" src="https://user-images.githubusercontent.com/37787994/133366399-9bf14c7f-ed33-4024-a26b-94dd247eca8a.png">


```Javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(!board.length) return false;
    let h = board.length;
    let v = board[0].length;
    //move up, right, down, left
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    const explore = (x, y, k) => {
        //if current cell is not corresponding to the work, break the recursive call immediately
        if(board[x][y] !== word[k]) return false;
        //final step is here, check if all word matched, and return true
        if(k === word.length - 1) return true;
        //make sure the remove visited cell, otherwise it is a infinite loop
        board[x][y] = '*';
        //the direction on x and y
        for(let [dx, dy] of dirs) {
            let i = x + dx;
            let j = y + dy;
            if(i >= 0 && i < h && j >= 0 && j < v) {
                if(explore(i, j, k + 1)) return true;
            }
        }
        //RESET!!Because current set is not satisified
        board[x][y] = word[k];
        return false;
    }
    
    //traverse the entire matrix, and call explore function
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < v; j++) {
            //i is row, j is col, and 0 is current word index => word[0]
            if(explore(i, j, 0)) return true;
        }
    }
    return false;
};
```


## Similar to 200 (counting number of island)

```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let h = board.length;
    let v = board[0].length;
    
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < v; j++) {
            if(explore(board, word, 0, i, j)) return true;
        }
    }
    return false;
    
    function explore(board, word, k, x, y) {
        if(x < 0 || x === h || y < 0 || y === v || board[x][y] !== word[k]) {
            return false;
        }
        if(k === word.length - 1) return true;
        
        board[x][y] = '*';
        
        let found = explore(board, word, k + 1, x + 1, y) || 
                    explore(board, word, k + 1, x - 1, y) ||
                    explore(board, word, k + 1, x, y + 1) ||
                    explore(board, word, k + 1, x, y - 1);

        board[x][y] = word[k];
        return found;
    }
};
```
