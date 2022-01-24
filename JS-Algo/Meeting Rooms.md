<img width="736" alt="Screen Shot 2022-01-23 at 23 41 54" src="https://user-images.githubusercontent.com/37787994/150734318-4a635860-9705-433e-8e5b-e4c5ad6a2970.png">


Sort
T.C. O(nlogn)
```js
var canAttendMeetings = function(intervals) {
    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    for(let i = 0; i < sorted.length - 1; i++) {
        if(sorted[i][1] > sorted[i+1][0]) return false;
    }
    return true;
};
```
