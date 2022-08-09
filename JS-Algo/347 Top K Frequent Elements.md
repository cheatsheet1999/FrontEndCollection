<img width="562" alt="Screen Shot 2022-08-09 at 12 56 49" src="https://user-images.githubusercontent.com/37787994/183749375-fb0660d1-178a-477d-a926-e201b6b66c60.png">


```js
var topKFrequent = function(nums, k) {
    const map = new Map();
    const res = [];
    const freqArr = [];
    
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of map) {
        freqArr[freq] = (freqArr[freq] || new Set()).add(num);
    }
    
    for(let i = freqArr.length - 1; i >= 0; i--) {
        // destructing if two numbers hava the same frequency
        if(freqArr[i]) res.push(...freqArr[i]);
        if(res.length === k) break;
    }
    return res;
};
```
