#### Given an array of positive integers nums and a positive integer `target`, return the minimal length of a **contiguous subarray** `[numsl, numsl+1, ..., numsr-1, numsr]` of which the sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.
<img width="537" alt="Screen Shot 2021-10-13 at 12 52 15 AM" src="https://user-images.githubusercontent.com/37787994/137090600-e4637758-b8a5-47a1-9983-ad273b8bd99e.png">



#### Sliding Window O(n) Solution
```JS
var minSubArrayLen = function(target, nums) {
  //让l和r两个指针开始都为0，sum也为0， 取出长度，初始化res为一个最大值，此处为len+1,因为最大也不可能到达这个值
    let l = 0; r = 0, len = nums.length, sum = 0, res = len + 1;
  //让r指针一直走，直到走到最后一个数字
    while(r < len) {
      //把每一个数字都加起来
        sum += nums[r];
      //让r指针一直走，直到走到最后一个数字
        r++;
      //如果r在移动过程中，sum >= target
        while(sum >= target) {
          //检查是res大，还是 r - l 大，1st iteration总是res大， 所以取r-l
            res = res < r - l ? res : r-l;
          //减掉l的值，然后把l往右移
            sum -= nums[l];
            l++;
        }
    }
  //如果是res大，那么表示sum比要找的数要小，所以直接返回0， otherwise, 返回res
    return res > len ? 0 : res;
};
```
