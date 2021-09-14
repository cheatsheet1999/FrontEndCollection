**Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.**

*Substrings that occur multiple times are counted the number of times they occur.*

<img width="650" alt="Screen Shot 2021-09-13 at 9 59 12 PM" src="https://user-images.githubusercontent.com/37787994/133197556-02fec2d8-4d69-47af-b398-3f4d6ff02c7e.png">

```Javascript
var countBinarySubstrings = function(s) {
    let curr = 1, prev = 0, ans = 0
    for (let i = 1; i < s.length; i++)
        if (s[i] === s[i-1]){
            curr++;
        }
        else {
            ans += Math.min(curr, prev)
            prev = curr
            curr = 1
        }
    return ans + Math.min(curr, prev)
};


```
