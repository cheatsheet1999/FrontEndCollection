A peak element is an element that is strictly greater than its neighbors.

Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

You must write an algorithm that runs in O(log n) time.

<img width="585" alt="Screen Shot 2021-12-12 at 14 49 26" src="https://user-images.githubusercontent.com/37787994/145730904-90b775a5-7c4b-4fd7-a181-c390c5ac3a45.png">

Binary search
Time complexity: O(log(n))
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0, end = nums.length - 1;
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] > nums[mid + 1]) {
            end = mid;
        }
        else {
            start = mid + 1
        }
    }
    return start
};
```
