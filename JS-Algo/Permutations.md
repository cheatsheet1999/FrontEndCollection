### Given an array *nums* of distinct integers, return all the *possible permutations*. You can return the answer in *any order*.

<img width="585" alt="Screen Shot 2021-09-17 at 2 33 05 PM" src="https://user-images.githubusercontent.com/37787994/133855859-af45ae95-abb5-4297-b909-3d1d5a597e4b.png">


```Javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(letters) {
    const res = [];
    bfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}

/*
bfs function:
1st, check if the length in 'path' array is already the max length, then copy whole array from path to the result array
2nd, traverse the letters array, jump over the iteration if ....
*/
let bfs = function(letters, path, used, res) {
    if(path.length === letters.length) {
        res.push(Array.from(path));
    }
    for(let i = 0; i < letters.length; i++) {
        if(used[i] === true) continue;
        path.push(letters[i]);
        used[i] = true;
        bfs(letters, path, used, res);
        path.pop();
        used[i] = false;
    }
}
```
