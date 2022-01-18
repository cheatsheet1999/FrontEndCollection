<img width="731" alt="Screen Shot 2022-01-17 at 23 21 10" src="https://user-images.githubusercontent.com/37787994/149881881-a49866c6-21f6-418f-b72b-311f532d305c.png">
<img width="695" alt="Screen Shot 2022-01-17 at 23 21 18" src="https://user-images.githubusercontent.com/37787994/149881888-cea81e48-8973-49f0-993d-ca0694748cc1.png">

T.C. DFS O(n)

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let ans = 0;
    dfs(root, low, high);
    return ans;
    
    function dfs(root, low, high) {
        if(root) {
            if(low <= root.val && root.val <= high) {
                ans += root.val;
            }
            if(low < root.val) {
                dfs(root.left, low, high);
            }
            if(root.val < high) {
                dfs(root.right, low, high);
            }
        }
    }
};
```
