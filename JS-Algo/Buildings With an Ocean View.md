<img width="714" alt="Screen Shot 2022-01-22 at 23 15 22" src="https://user-images.githubusercontent.com/37787994/150667081-64810171-502e-49d8-b86d-54fcd47afeff.png">

## O(n) stack solution

```js
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let stack = [];
    for(let i = 0; i < heights.length; i++) {
        // if current building's length
        while(stack.length && heights[i] >= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(i);
    }
    return stack;
};
```
