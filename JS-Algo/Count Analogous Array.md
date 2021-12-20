An array is said to be analogous to the secret array if all of the following conditions are true:    
• The length of the array is equal to the length of the secret array.   
• Each integer in the array lies in the interval [lowerBound, upperBound].      
• The difference between each pair of consecutive integers of the array must be equal to the difference between the respective pair of consecutive integers in the secret array. In other words, let the secret array be [s[0], s[1],..., s[n-1]] and let the analogous array be [a[0], a[1],..., a[n-1]], then (a[i-1] - a[i]) must be equal to (s[i-1] - s[i]) for each i from 1 to n -1.    

Given the value of integers lowerBound and upperBound, inclusive, and the array of differences between each pair of consecutive integers of the secret array, find the number of arrays that are analogous to the secret array. If there is no array analogous to the secret array, return 0.

For example:
consecutiveDifference = [-2, -1, -2, 5]
lowerBound = 3
upperBound = 10

Note that none of the values is out of the bound. All possible analogous arrays are:
[3, 5, 6, 8, 3]
[4, 6, 7, 9, 4]
[5, 7, 8, 10, 5]


```js
function countAnalogousArrays(consecutiveDifference, lowerBound, upperBound) {
    let maxDiff = -Infinity;
    let minDiff = Infinity;
    let runningSum = 0;

    consecutiveDifference.forEach((diff) => {
        runningSum += diff;

        if(runningSum > maxDiff) {
            maxDiff = runningSum;
        }

        if(runningSum < minDiff) {
            minDiff = runningSum;
        }
    })
    
    let maxValidUpperBound = upperBound + minDiff < upperBound ? upperBound + minDiff : upperBound;
    let minValidLowerBound = lowerBound + maxDiff > lowerBound ? lowerBound + maxDiff : lowerBound;
    
    if(maxValidUpperBound > minValidLowerBound) {
        return maxValidUpperBound - minValidLowerBound + 1
    } else {
        return 0
    }
}
```
