#### You are given an array prices where `prices[i]` is the price of a given stock on the ith day.

#### You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

#### Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

<img width="445" alt="Screen Shot 2021-11-03 at 6 06 45 PM" src="https://user-images.githubusercontent.com/37787994/140240340-a67d1d37-8694-4734-bfc6-ac871d4f28d7.png">


```JS
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = -Infinity;
    let min = Infinity;
    
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min)
    }
    return max
};
```
