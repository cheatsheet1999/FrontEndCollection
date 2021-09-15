Given an array of meeting time intervals **intervals** where **intervals[i] = [starti, endi]**, *return the minimum number of conference rooms required.*


<img width="561" alt="Screen Shot 2021-09-14 at 4 45 53 PM" src="https://user-images.githubusercontent.com/37787994/133348201-da9580af-24c6-4718-a516-23e142c16d14.png">

<img width="561" alt="Screen Shot 2021-09-14 at 5 07 44 PM" src="https://user-images.githubusercontent.com/37787994/133349804-9e44b63b-b236-477b-8f2b-7767a2487b94.png">

```Javascript
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(!intervals.length) return 0;
    let rooms = 0;
    let end = 0;
    let starts = intervals.map(a => a[0]).sort((a, b) => a - b);
    let ends = intervals.map(a => a[1]).sort((a, b) => a - b);
    
    for(let i = 0; i < intervals.length; i++) {
        if(starts[i] < ends[end]) {
            rooms++;
        } else {
            end++;
        }
    }
    return rooms;
};
```
