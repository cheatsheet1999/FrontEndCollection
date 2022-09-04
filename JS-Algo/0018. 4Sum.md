### Given an array _nums_ of _n_ integers, return an array of all the **unique** quadruplets _[nums[a], nums[b], nums[c], nums[d]]_ such that:
- 0 <= a, b, c, d < n
- a, b, c, and d are distinct.
- nums[a] + nums[b] + nums[c] + nums[d] == target


You may return the answer in any order.


<img width="559" alt="Screen Shot 2021-09-23 at 1 15 14 AM" src="https://user-images.githubusercontent.com/37787994/134474820-d8d48eb2-0390-42ae-ba30-e9613693a9a2.png">

```JS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a -  b);
    const res = [];
    
    function nSum(arr, target, result, n) {
        if(n === 2) {
            twoSum(arr, target, result);
            return;
        }
        
        for(let i = 0; i < arr.length; i++) {
            while(arr[i] === arr[i - 1]) i++;
            //...result includes all previous numbers that already been picked up from original array
            nSum(arr.slice(i + 1), target - arr[i], [...result, arr[i]], n - 1);
        }
    }
    
    function twoSum(arr, target, result) {
        let low = 0, high = arr.length - 1;
        while(low < high) {
            let sum = arr[low] + arr[high];
            if(sum === target) {
                //res is containing result array from nSum function, and two more numbers from this function
                res.push([...result, arr[low], arr[high]]);
                while(arr[low] === arr[low + 1]) low++;
                while(arr[high] === arr[high - 1]) high--;
                low++;
                high--;
            }
            else if(sum < target) {
                low++;
            }
            else {
                high--;
            }
        }
    }
    
    nSum(nums, target, [], 4);
    return res;
};
```
