You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

<img width="489" alt="Screen Shot 2021-11-19 at 18 53 53" src="https://user-images.githubusercontent.com/37787994/142710284-cd46b855-2e0a-471f-a4bf-52fd66f7438f.png">

Time complexity: O(m) - a total of m nodes to be traversed
Spacce complexity: O(m) - The depth of the recursion tree can go upto mm in the case of a skewed tree. In average case, depth will be O(logm).

```JS
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(t1 === null) {
        return t2;
    }
    if(t2 === null) {
        return t1;
    }
    
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1
};
```


Extra: Stack solution

```JS
const mergeTrees = (t1, t2) => {
    if (!t1 || !t2)
        return t1 || t2;
    const stack = Array();
    stack.push([t1, t2]);
    while (stack.length > 0) {
        const pair = stack.pop();
        if (!pair[0] || !pair[1])
            continue;
        pair[0].val += pair[1].val;
        if (!pair[0].left)
            pair[0].left = pair[1].left;
        else
            stack.push([pair[0].left, pair[1].left]);
        if (!pair[0].right)
            pair[0].right = pair[1].right;
        else
            stack.push([pair[0].right, pair[1].right]);
    }
    return t1;
};
```
