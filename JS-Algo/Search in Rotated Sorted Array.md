### There is an integer array *nums* sorted in ascending order *(with distinct values)*.

**Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].**

Given the array nums **after** the rotation and an integer target, *return the index of target if it is in nums, or -1 if it is not in nums.*

You must write an algorithm with **O(log n)** runtime complexity.

<img width="640" alt="Screen Shot 2021-09-21 at 1 54 38 PM" src="https://user-images.githubusercontent.com/37787994/134246209-45825ebc-a22d-4d51-8d6a-3d2619decb1d.png">

<img width="409" alt="Screen Shot 2021-11-05 at 9 10 56 PM" src="https://user-images.githubusercontent.com/37787994/140597469-a1c3e093-0284-4f43-b492-7d16e8b978fa.png">




```Javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }
    
    // When dividing the roated array into two halves, one must be sorted.
    
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
        
      } else {
        // target is in the right
        left = mid + 1;
      }
    } 
    
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;

      } else {
        // target is in the left
        right = mid - 1;
      }
    }
    
    
  }
    
  return -1;
};
```
