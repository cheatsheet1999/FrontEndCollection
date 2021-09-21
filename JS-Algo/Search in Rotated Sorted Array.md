### There is an integer array *nums* sorted in ascending order *(with distinct values)*.

**Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].**

Given the array nums **after** the rotation and an integer target, *return the index of target if it is in nums, or -1 if it is not in nums.*

You must write an algorithm with **O(log n)** runtime complexity.

<img width="640" alt="Screen Shot 2021-09-21 at 1 54 38 PM" src="https://user-images.githubusercontent.com/37787994/134246209-45825ebc-a22d-4d51-8d6a-3d2619decb1d.png">

```Javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(target === nums[mid]) {
            return mid;
        }
        //if left side is orderd, then we check if nums[start] < target < nums[mid]
        if(nums[start] <= nums[mid]) {
            if(nums[start] <= target && target <= nums[mid]) {
                //if so, it means we need to narrow down
                end = mid - 1;
            } else {
                //else, we enlarge the range
                start = mid + 1;
            }
        } else {
            //if left side is not ordered ascendingly, we can then check if nums[mid] < target < nums[end]
            if(target > nums[mid] && target <= nums[end]) {
                //larger that mid, so increase the start number
                start = mid + 1;
            } else {
                //otherwise narrowing down
                end = mid - 1;
            }
        }
    }
    return -1;
};
```
