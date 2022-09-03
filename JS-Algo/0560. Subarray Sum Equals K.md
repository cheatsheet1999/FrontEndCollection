**Given an array of integers *nums* and an integer *k*, return the total number of continuous subarrays whose sum equals to *k*.**

*aka-有几组和为k的组合*

<img width="282" alt="Screen Shot 2021-09-15 at 1 07 31 AM" src="https://user-images.githubusercontent.com/37787994/133395288-9e4e8c66-e6ae-45f8-ae12-21649ea69e42.png">

```Javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    /*imagine the situation 3 4 target = 7
      since 7 - (3+4) = 0 and we are looking 
      for if there's a case where Sumi is 0, 
      and there should always be a case for that.
      如果target是仅有的两个数的和，不提前set好[0,1]就会只输出0而不是唯一的一个
      */
    map.set(0, 1);
    for(let i = 0; i < nums.length; i++) {
    //sum represented current sum
        sum += nums[i];
        //if we already have result for sum - target 
        if(map.has(sum - k)) {
            count += map.get(sum - k);
        }
        //only happens when negative numbers occur
        if(map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        }
        else {
            map.set(sum, 1);
        }
    }
    return count;
};
```
