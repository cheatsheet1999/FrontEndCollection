

<img width="769" alt="Screen Shot 2023-01-03 at 10 45 31 PM" src="https://user-images.githubusercontent.com/37787994/210486201-565c60f7-1273-47c8-be45-d4385ed326ce.png">


```js
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let stack = [];
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] === nums[j + 1] - 1) {
            continue;
        } else {
            if(i === j) {
                stack.push(`${nums[i]}`);
            } else {
                stack.push(`${nums[i]}->${nums[j]}`);
            }
            i = j + 1;
        }
    }
    return stack;
};
```
