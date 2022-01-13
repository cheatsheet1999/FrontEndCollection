<img width="581" alt="Screen Shot 2022-01-13 at 13 31 17" src="https://user-images.githubusercontent.com/37787994/149404683-fd72e396-dfda-4249-b918-8517a5952bb1.png">

```js
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */

/*
sx  sy  tx  ty
1   1   3   5
1   1   3   2
1   1   1   2

*/
var reachingPoints = function(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (tx === sx && ty === sy) {
            return true;
        }
        
        if (tx > ty) {
            tx %= ty;
        }
        else {
            ty %= tx;
        }
        
        if(tx === sx) {
            if((ty - sy) % tx === 0) {
                return true;
            }
            else {
                return false
            }
        }
        
        if(ty === sy) {
            if((tx - sx) % ty === 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    return false;
};
```
