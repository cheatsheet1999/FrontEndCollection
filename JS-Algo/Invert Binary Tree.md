### Given the **root** of a binary tree, invert the tree, and return *its root*.
<img width="654" alt="Screen Shot 2021-09-16 at 11 55 14 AM" src="https://user-images.githubusercontent.com/37787994/133669190-8f802990-469b-41dd-9e10-8497dcc41aa9.png">


#### Recursive
```Javascript
/*
        4
     2     7
   1  3   6  9  
*/




function invertTree(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}
```
