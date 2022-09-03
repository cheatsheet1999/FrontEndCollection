
<img width="759" alt="Screen Shot 2022-08-04 at 17 24 18" src="https://user-images.githubusercontent.com/37787994/182976719-9a043841-6e30-4284-9558-78d8aeb79322.png">


```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
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
    
    nSum(nums, 0, [], 3);
    return res;
};
```
