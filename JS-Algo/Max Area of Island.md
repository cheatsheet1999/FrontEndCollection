You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

<img width="469" alt="Screen Shot 2021-11-18 at 18 07 47" src="https://user-images.githubusercontent.com/37787994/142522439-4ae53a46-0d5f-4135-81f4-7228be144059.png">

<img width="482" alt="Screen Shot 2021-11-18 at 18 08 00" src="https://user-images.githubusercontent.com/37787994/142522596-0fc52bc0-0284-4269-9d79-08b389721af9.png">


```JS
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 1) {
                count = Math.max(dfs(i, j, grid), count);
            }
        }
    }
    return count
};

let dfs = function(i, j, grid) {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) {
        return 0;
    }
    grid[i][j] = 0;
    let up = dfs(i, j + 1, grid);
    let down = dfs(i, j - 1, grid)
    let left = dfs(i - 1, j, grid);
    let right = dfs(i + 1, j, grid);
    return up + down + left + right + 1;
}
```
