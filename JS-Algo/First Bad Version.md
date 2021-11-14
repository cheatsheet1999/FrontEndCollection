You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

<img width="475" alt="Screen Shot 2021-11-13 at 22 06 30" src="https://user-images.githubusercontent.com/37787994/141668388-998ea209-0021-47e0-9803-27f878793d85.png">


```JS
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end = n;
        while(start < end) {
            let mid = Math.floor((start + end) / 2);
            if(isBadVersion(mid)) {
                end = mid;
            }
            else {
                start = mid + 1
            }
        }
        return start
    };
};
```
