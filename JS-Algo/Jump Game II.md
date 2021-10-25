#### Given an array of non-negative integers `nums`, you are initially positioned at the first index of the array.

#### Each element in the array represents your maximum jump length at that position.

#### Your goal is to reach the last index in the minimum number of jumps.

#### You can assume that you can always reach the last index.

<img width="441" alt="Screen Shot 2021-10-25 at 12 04 48 AM" src="https://user-images.githubusercontent.com/37787994/138649610-8e989698-7b07-4283-b546-4fcadfdc93ac.png">


```JS
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
every time i move forward to next index, which mean + 1
i will touch each single index, as long as we reach the currentJumpEnd, 
that means we should ready for next jump

Time complexityL O(n) because there are NN elements in the array 
and we visit each element in the array only once.

Space Complexity: O(1)because we don't use any additional data structures.
*/
var jump = function(nums) {
    let farthest = 0, curJumpEnd = 0, jump = 0;
    
    for(let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, nums[i] + i);
        if(i === curJumpEnd) {
            jump++;
            curJumpEnd = farthest;
        }
    }
    return jump;
};
``` 

 
