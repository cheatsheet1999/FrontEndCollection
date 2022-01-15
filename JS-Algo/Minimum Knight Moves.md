<img width="730" alt="Screen Shot 2022-01-14 at 18 25 25" src="https://user-images.githubusercontent.com/37787994/149603588-2cafb055-d8bd-4d12-843e-9b8b35eb2dce.png">

![IMG_301A5729E168-1](https://user-images.githubusercontent.com/37787994/149603617-ad4f2f9f-c9da-4098-b987-f996840660dc.jpeg)

```js
var minKnightMoves = function(x, y) {    
    let dirs = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]]; 
    
    let queue = [[0, 0]];
    let level = 0, visited = new Set();
    while(queue.length != 0) {
        let next = [];
        while(queue.length != 0) {
            let cur = queue.pop();
            if (cur[0] == x && cur[1] == y) return level;
            for (let dir of dirs) {
                let nextX = cur[0]+dir[0], nextY = cur[1]+dir[1];
                if (!visited.has(nextX+","+nextY)) {
                    next.push([nextX, nextY]);
                    visited.add(nextX+","+nextY);
                }
            }
        };
        queue = next;
        level++;
    }    
};


```






