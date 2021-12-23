#### An array is said to be analogous to the secret array if all of the following conditions are true:
• The length of the array is equal to the length of the secret array.  
• Each integer in the array lies in the interval `[lowerBound, upperBound]`.  
• The difference between each pair of consecutive integers of the array must be equal to the difference between the respective pair of consecutive integers in the secret array. In other words, let the secret array be [s[0], s[1],..., s[n-1]] and let the analogous array be [a[0], a[1],..., a[n-1]], then (a[i-1] - a[i]) must be equal to (s[i-1] - s[i]) for each i from 1 to n -1.  

Given the value of integers lowerBound and upperBound, inclusive, and the array of differences between each pair of consecutive integers of the secret array, find the number of arrays that are analogous to the secret array. If there is no array analogous to the secret array, return 0.

***
For example:
consecutiveDifference = [-2, -1, -2, 5]
lowerBound = 3
upperBound = 10

Note that none of the values is out of the bound. All possible analogous arrays are:
[3, 5, 6, 8, 3]
[4, 6, 7, 9, 4]
[5, 7, 8, 10, 5]

Tha answer is 3.
***

<img width="794" alt="Screen Shot 2021-12-22 at 18 43 58" src="https://user-images.githubusercontent.com/37787994/147174925-87a06372-dc87-4f90-9ae4-c8f682f6384f.png">



```JS
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


```Python
def countAnalogousArrays(consecutiveDifference , lowerBound , upperBound):

    maxdiff = float('-inf')
    mindiff = float('inf')
    runningsum = 0
    if len(consecutiveDifference) == 0:
        return 0

    if upperBound < lowerBound :
        return 0

    for diff in consecutiveDifference:
        runningsum+=diff
        if runningsum > maxdiff:
            maxdiff = runningsum

        if runningsum < mindiff:
            mindiff = runningsum

    maxvalidupperbound = upperBound + mindiff if upperBound+mindiff < upperBound else upperBound
    minvalidlowerbound = lowerBound + maxdiff if lowerBound + maxdiff > lowerBound else lowerBound

    if maxvalidupperbound >= minvalidlowerbound:
        return maxvalidupperbound - minvalidlowerbound + 1
    else:
        return 0
```


```py
def countAnalogousArrays(consecutiveDifference , lowerBound , upperBound):

    maxdiff = float('-inf')
    mindiff = float('inf')
    runningsum = 0
    if len(consecutiveDifference) == 0:
        return 0

    if upperBound < lowerBound :
        return 0

    for diff in consecutiveDifference:
        runningsum+=diff
        if runningsum > maxdiff:
            maxdiff = runningsum

        if runningsum < mindiff:
            mindiff = runningsum

    maxvalidupperbound = upperBound + mindiff if upperBound+mindiff < upperBound else upperBound
    minvalidlowerbound = lowerBound + maxdiff if lowerBound + maxdiff > lowerBound else lowerBound

    if maxvalidupperbound >= minvalidlowerbound:
        return maxvalidupperbound - minvalidlowerbound + 1
    else:
        return 0
```
[TikTok]
