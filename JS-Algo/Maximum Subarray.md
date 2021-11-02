#### Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

#### A _subarray_ is a _contiguous_ part of an array.

<img width="436" alt="Screen Shot 2021-11-01 at 6 44 34 PM" src="https://user-images.githubusercontent.com/37787994/139773247-51091ad5-c9ee-4350-be6a-aef40f714c7f.png">


Time complexityL O(n) -- Hashmap solution
```JS
var maxSubArray = function(nums) {
    let prev = 0;
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);//prev will check if the upcoming number is larger than current number plus itself
        max = Math.max(max, prev);//  max will always keep the maximum number, because prev may smaller than max
    }
    return max
};
```
