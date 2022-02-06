<img width="723" alt="Screen Shot 2022-02-06 at 00 59 07" src="https://user-images.githubusercontent.com/37787994/152672350-2d6f92df-d9f0-49c0-b12e-2c00b06e77ed.png">

## BFS

```js
var rightSideView = function(root) {
    const result = [];
    const queue = [];
    
    if (root === null) return result;
    
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let n = queue.shift();
            if (i === size - 1) result.push(n.val);
            if (n.left !== null) queue.push(n.left);
            if (n.right !== null) queue.push(n.right);
        }
    }
    
    return result;
};
```


## DFS
```js
var rightSideView = function(root) {
    
  const result = []

  var traverse = function(node,level){
      if (!node) return
      result[level] = node.val
      traverse(node.left,level+1)
      traverse(node.right,level+1)
  }
  
  traverse(root,0)
  return result
};
```
