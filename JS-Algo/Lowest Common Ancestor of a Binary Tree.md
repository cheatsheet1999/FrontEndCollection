Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

<img width="487" alt="Screen Shot 2021-11-27 at 15 51 35" src="https://user-images.githubusercontent.com/37787994/143722567-18455135-238c-4456-852e-bf39ca671708.png">

<img width="488" alt="Screen Shot 2021-11-27 at 15 51 43" src="https://user-images.githubusercontent.com/37787994/143722570-e143cfb0-2390-475d-9a9b-ba74cff33940.png">

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q) {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(!left) {
        return right;
    }
    if(!right) {
        return left
    }
    return root
};
```
