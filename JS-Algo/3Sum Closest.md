### Given an integer array _nums_ of length n and an integer _target_, find three integers in _nums_ such that the sum is closest to _target_.

### Return the _sum of the three integers._

### You may assume that each input would have exactly one solution.

<img width="550" alt="Screen Shot 2021-09-23 at 2 14 00 PM" src="https://user-images.githubusercontent.com/37787994/134585051-d13da397-86c2-489e-969d-78d7931a3fcb.png">


**O(n^2) Two pointer solution**
```JS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = Infinity;
    for(let i = 0; i < nums.length - 2; i++) {
        //low must be i + 1 because low cannot overlap with i.
        //low and high are two pointers that in between
        let low = i + 1, high = nums.length - 1;
        while(low < high) {
            let currSum = nums[i] + nums[low] + nums[high];
            //if currSum is closer than current result, then use currSum
            //since we have negative value, we use 'abs', otherwise, 
            //for example, -1 is closer to 1 than -3. with the help of abs, 2 < 4 so use -1
            //but without it, -2 > -4 so keep the way that is far away from target, which is not true
            if(Math.abs(currSum - target) < Math.abs(res - target)) {
                res = currSum;
            }
            if(currSum > target) {
                high--;
            }
            else {
                low++;
            }
        }
    }
    return res;
};
```
