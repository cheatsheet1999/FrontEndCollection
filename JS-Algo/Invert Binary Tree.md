### Given the **root** of a binary tree, invert the tree, and return *its root*.
<img width="654" alt="Screen Shot 2021-09-16 at 11 55 14 AM" src="https://user-images.githubusercontent.com/37787994/133669190-8f802990-469b-41dd-9e10-8497dcc41aa9.png">


#### Recursive O(n)
```Javascript
/*
        4
     2     7            =>      7       =>      7       =>      2       =>      2
   1  3   6  9                 6 9             9 6             1 3             3 1
   
         4                       4                  4
      2     7           =>    2     7   =>       7     2 
    1  3   6  9              3 1   9 6          9 6   3 1 
*/




function invertTree(root) {
  if (root == null) return root;
  //go deep on the right sub tree, then swap one layer up, the last step is to exchange root.left and root.right
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}
```

#### BFS O(n)
```Javascript
/*
        4                               4                                                                                       4
     2     7            =>           7     2            =>       2      =>      2        =>     7       =>      7       =>    7     
   1  3   6  9                     6  9   1  3                 1   3          3   1           6   9           9   6
*/
      
var invertTree = function(root) {
    const stack = [root];
    while(stack.length) {
        let n = stack.pop();
        if(n !== null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }
    return root;
};
```
