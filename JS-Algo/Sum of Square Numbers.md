<img width="736" alt="Screen Shot 2022-02-03 at 23 23 30" src="https://user-images.githubusercontent.com/37787994/152482263-62e4dc91-6b59-4c42-aa0a-fe507f1957f9.png">

```js
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let l = 0, r = Math.floor(Math.sqrt(c));
    while(l <= r) {
        let sum = l ** 2 + r ** 2;
        if(sum === c) {
            return true;
        }
        else if(sum < c) {
            l++;
        }
        else {
            r--;
        }
    }
    return false
};
```
