Inorder traversal of BST is an array sorted in the ascending order
 
Complexity Analysis

Time complexity: O(N) in the worst case when one of the swapped nodes is a rightmost leaf.

Space complexity : up to O(N) to keep the stack in the worst case when the tree is completely lean.

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// In order traverse, it should be ascending order. If not in ascending order, swap them
var recoverTree = function(root) {
    let prev = null, big = null, small = null;
    let dfs = function(root) {
        if (!root) return;
        dfs(root.left);
        if (prev != null && prev.val > root.val) {
            small = root; // potential smaller number that needs to be swapped
            if (!big) big = prev; // assured bigger number that needs to be swapped
            else return;
        }
        prev = root;
        dfs(root.right);
    }
    
    dfs(root);
    [big.val, small.val] = [small.val, big.val];
};
```
