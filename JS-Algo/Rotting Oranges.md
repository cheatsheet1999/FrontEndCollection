You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

<img width="485" alt="Screen Shot 2021-11-22 at 21 05 53" src="https://user-images.githubusercontent.com/37787994/142969811-6c007438-4d5f-4d1e-8d55-cd5429a0e111.png">


#### Time Complexity O(n)
#### Space Complexity O(n)

```js
var orangesRotting = function(grid) {
    let dirs = [[-1,0],[0,1],[1,0],[0,-1]];
    let fresh = 0;
    let q = [];
    let minute = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } else if (grid[i][j] === 2) {
                q.push([i, j]);
            }
        }
    }
    if (fresh === 0) {
        return 0;
    }
    while (q.length > 0) {
        let qLength = q.length;
        let rot = 0;
        for (let i = 0; i < qLength; i++) {
            let [row, col] = q.shift();
            if (grid[row][col] === 1) {
                rot++;
                grid[row][col] = 2;
            }
            dirs.forEach(function(d) {
                 let next = [row + d[0], col + d[1]];
                if (next[0] >= 0 && next[0] < grid.length 
                    && next[1] >= 0 && next[1] < grid[0].length
                   && grid[next[0]][next[1]] === 1) {
                    q.push(next);
                }
            })
        }
        if (rot > 0) {
            fresh -= rot;
            minute++;
        }
    }
    return fresh === 0 ? minute : -1;
};
```

In example 2, fresh eventualy is 1, so return -1
