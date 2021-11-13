Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 <img width="471" alt="Screen Shot 2021-11-13 at 13 49 19" src="https://user-images.githubusercontent.com/37787994/141658687-a5f4514d-c491-44ed-998b-742b4109a96c.png">

 Time complexity : O(logN).
 Space COmplexity: O(N)

```JS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target) {
            return mid;
        }
        if(target < nums[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
};
```
