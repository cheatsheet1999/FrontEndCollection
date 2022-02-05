<img width="729" alt="Screen Shot 2022-02-04 at 22 32 27" src="https://user-images.githubusercontent.com/37787994/152630090-b216b788-08be-43fa-900d-c84f2beb9fc5.png">

<img width="720" alt="Screen Shot 2022-02-04 at 22 32 36" src="https://user-images.githubusercontent.com/37787994/152630093-828eed22-cc24-4687-98bb-bcb6313d70d0.png">

DFS T.C. O(N)
<img width="733" alt="Screen Shot 2022-02-04 at 22 33 24" src="https://user-images.githubusercontent.com/37787994/152630108-c041aaed-4f3f-4e71-ba35-6014d2ca7f02.png">


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
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0;
    
    function dfs(node, num) {
        num += node.val;
        if(node.left === null && node.right === null) {
            sum += +num;
        }
        if(node.left) dfs(node.left, num);
        if(node.right) dfs(node.right, num);
    }
    
    dfs(root, '');
    return sum;
};
```
