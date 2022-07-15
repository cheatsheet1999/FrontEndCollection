
<img width="947" alt="Screen Shot 2022-07-15 at 00 39 17" src="https://user-images.githubusercontent.com/37787994/179175978-8d4572eb-2786-46bf-9c91-b383c723464f.png">


```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] <= end) {
            end = Math.max(end, intervals[i][1]);
        } else {
            res.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    res.push([start, end]);
    return res;
};
```
