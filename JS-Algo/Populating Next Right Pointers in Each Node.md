You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.


<img width="478" alt="Screen Shot 2021-11-19 at 19 44 56" src="https://user-images.githubusercontent.com/37787994/142711865-5dc41b91-0916-44b6-b08d-f34f40bd01f6.png">

<img width="482" alt="Screen Shot 2021-11-19 at 19 45 29" src="https://user-images.githubusercontent.com/37787994/142711878-2bfbddf8-4652-4666-bc71-dff07fb066e8.png">


```js
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    if(root.left) {
        root.left.next = root.right;
    }
    if(root.right && root.next) {
        root.right.next = root.next.left;
    }
    connect(root.left);
    connect(root.right);
    
    return root
};
```
