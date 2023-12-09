
<img width="887" alt="Screenshot 2023-12-08 at 6 53 08 PM" src="https://github.com/cheatsheet1999/FrontEndCollection/assets/37787994/c4a5bfee-733b-40d4-9bce-dc295522e8c0">

```js      
class TreeNode {
    constructor(value) {
        this.value = value;

        this.left = null;
        this.right = null;
    }
}

// Function to find the next node in postorder traversal
function findNextNodeInPostorder(root, value) {
    let lastVisited = null;
    let nextNode = null;
    let found = false;

    function traverse(node) {
        if (node === null || found) {
            return;
        }

        traverse(node.left);
        traverse(node.right);

        // Check if the last visited node is the one we're looking for
        if (lastVisited && lastVisited.value === value) {
            nextNode = node;
            found = true;
            return;
        }

        lastVisited = node;
    }

    traverse(root);
    return nextNode ? nextNode.value : null;
}

```
