Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

<img width="478" alt="Screen Shot 2021-11-23 at 21 28 53" src="https://user-images.githubusercontent.com/37787994/143175131-cf516786-cb18-465d-8104-e77bf8c8f9e2.png">

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = comb(n, k);
    return ans;
};

let comb = function(n, k, res = [], curr = [], index = 1) {
    if(curr.length === k) {
        res.push(curr);
        return;
    }
    else {
        while(index <= n) {
            comb(n, k, res, [...curr, index], ++index);
        }
        return res
    }
}
```

