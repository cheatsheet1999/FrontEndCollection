Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

<img width="475" alt="Screen Shot 2021-11-27 at 16 33 00" src="https://user-images.githubusercontent.com/37787994/143723395-22842b1c-4283-4772-9cc3-3306242c14ee.png">

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length-1; 
    
    // Search firstPosition
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(target <= nums[mid]) end = mid-1;
        else start=mid+1;
    }
    
    // Check if number exists
    if(nums[start] !== target) return [-1, -1];
    let l = start;
    
    // Reset pointers
    start = 0, end=nums.length-1;  
    
    // Search lastPosition
    while(start<=end){
        let mid =  Math.floor((start+end)/2);
        if(target >= nums[mid]) start = mid + 1;
        else end=mid-1;
    }
    let r=end;
    
    return [l, r]
};
```
