<img width="726" alt="Screen Shot 2022-02-04 at 00 06 26" src="https://user-images.githubusercontent.com/37787994/152486585-d6c400a9-54ac-4bc3-852a-c64327ceca6c.png">
<img width="726" alt="Screen Shot 2022-02-04 at 00 06 33" src="https://user-images.githubusercontent.com/37787994/152486596-ae43140a-c829-4128-aef5-31b22b0b8b52.png">

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
 * @return {boolean}
 */
var isValidBST = function(root, min = null, max = null) {
    if(!root) return true;
    if(min && root.val <= min.val) return false;
    if(max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};


```
