<img width="723" alt="Screen Shot 2022-02-06 at 00 59 07" src="https://user-images.githubusercontent.com/37787994/152672350-2d6f92df-d9f0-49c0-b12e-2c00b06e77ed.png">

## BFS

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    let queue = [];
    let res = [];
    
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if(i === size - 1) res.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
    }
    return res
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
