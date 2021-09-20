###  Implement *next permutation*, which rearranges numbers into the lexicographically next greater permutation of numbers.
### If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

### The replacement must be *in place* and use only constant extra memory.

<img width="638" alt="Screen Shot 2021-09-19 at 10 28 57 PM" src="https://user-images.githubusercontent.com/37787994/133960231-3743443d-2819-473a-a98e-3395670da283.png">

#### Explanation 
Input: nums = [1,2,3]
Output: [1,3,2]

- **Traverse backward, 2 is the point that starts decreasing, and 3 is larger than 2, so swap 2 and 3**

Input: nums = [3,2,1]
Output: [1,2,3]
 - **sorted in ascending order**

```Javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
1st:
            i < i + 1
    1       2       3
    
- call next large i = 1
2nd:
                    this index > i, so return this, and swap
    1       2       3
    
    
*/
var nextPermutation = function(nums) {
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            let large = nextLarge(i);
            swap(i, large);
            //important, because we want to reverse immediately after swap
            reverse(i + 1);
            return;
        }
    }
    nums.reverse();
    
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function nextLarge(index) {
        for(let i = nums.length - 1; i > index; i--) {
            if(nums[i] > nums[index]) return i;
        }
    }
    
    function reverse(index) {
        let start = index, end = nums.length - 1;
        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
};
```
