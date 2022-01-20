<img width="734" alt="Screen Shot 2022-01-20 at 00 16 43" src="https://user-images.githubusercontent.com/37787994/150291191-b6434fea-8285-4503-a909-32996b968f7c.png">
<img width="727" alt="Screen Shot 2022-01-20 at 00 16 49" src="https://user-images.githubusercontent.com/37787994/150291206-580caed2-8cb5-43df-9101-72c106d56bde.png">


DFS
Time Complexity:O(W⋅HlogH)) where W is the width of the binary tree (i.e. the number of columns in the result) and HH is the height of the tree. In the first part of the algorithm, we traverse the tree in DFS, which results in O(N) time complexity.
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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    let arr = {};
    let queue = [[root, 0]];
    
    while(queue.length) {
        let node = queue.shift();
        let n = node[0];
        if(!n) return [];
        let level = node[1];
        if(!arr[level]) {
            arr[level] = [n.val];
        }
        else {
            arr[level].push(n.val);
        }
        if(n.left !== null) {
            queue.push([n.left, level - 1]);
        }
        if(n.right !== null) {
            queue.push([n.right, level + 1])
        }
    }
    let res = [];
    Object.keys(arr).sort((a, b) => a - b).forEach((a) => res.push(arr[a]));
    return res;
};
```
