<img width="727" alt="Screen Shot 2022-02-11 at 23 11 34" src="https://user-images.githubusercontent.com/37787994/153699480-680e0362-175f-4cee-9df7-ad990792c167.png">

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    for(let i = nums.length - 1; i >= 0; i--) {
        count += nums[i] - nums[0];
    }
    return count;
};
```
