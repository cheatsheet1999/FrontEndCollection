### You are given an integer array _nums_. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

### Return _true_ if you can reach the last index, or _false_ otherwise.

<img width="535" alt="Screen Shot 2021-09-23 at 4 45 59 PM" src="https://user-images.githubusercontent.com/37787994/134597891-17a1ebf0-4ab5-4428-982f-e1cc46d092bd.png">

```JS
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        //max is the max index steps that it can jump to
        max = Math.max(max, nums[i] + i);
        if(max >= nums.length - 1) {
            return true;
        }
        //here, max <= i, the <= is necessary. if only <, then if max
        //is on the index where nums[index] = 0, it will not return false
        else if(max <= i && nums[i] === 0) {
            return false;
        }
    }
};
```
