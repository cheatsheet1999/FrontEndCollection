



<img width="571" alt="Screen Shot 2022-01-10 at 22 19 11" src="https://user-images.githubusercontent.com/37787994/148885649-a352fd51-cc0c-4d20-be68-73037ca21be4.png">



### DFS solution 
```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1') {
                count++;
                explore(i, j, grid);
            }
        }
    }
    return count;
};

let explore = function(i, j, grid) {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
        return;
    }
    grid[i][j] = '0';
    
    explore(i + 1, j, grid);
    explore(i - 1, j, grid);
    explore(i, j + 1, grid);
    explore(i, j - 1, grid);
}
```
