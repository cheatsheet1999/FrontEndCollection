Give a binary string **s**, return the number of non-empty substrings that have the same number of **0**'s and **1**'s, and all the **0**'s and all the **1**'s in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.


<img width="649" alt="Screen Shot 2021-09-14 at 6 50 24 PM" src="https://user-images.githubusercontent.com/37787994/133357295-fdfc093e-7c49-444c-8f3d-f7ef5c77fe6c.png">


```Javascript

/*
Since the 0's and 1's have to be grouped consecutively, we only have to be concerned with the most recent two groups (curr, prev) 
at any time as we iterate through the input string (s). Since each addition to our answer (ans) must therefore be centered on the
"edge" between the two groups, we should be able to count multiple increases to ans at the same time.

For example, if we find a group that is "0001111", then we know that we've found multiple answer counts centered on the "01".
Each additional extra character on both sides will be an extra answer, which means that "0011" and "000111" are also answers. 
In other words, the number that we should add to ans is equal to min(zeros, ones), or 3 in this example.

So we can now iterate through s, keeping track of the curr and prev groups, and when we find the end of a group, we can calculate 
our addition to ans and then swap the two variables while resetting curr to 1.

Since we're going to be comparing s[i] to s[i-1] to see if the character has changed, we'll need to start our iteration with 
i = 1 which means we should define a starting value for curr of 1. Also, since the end of s is technically the end of a group,
we should add another min(curr, prev) onto ans before we return ans, as it won't be accounted for in the iteration through s.

Time Complexity: O(N) where N is the length of s
Space Complexity: O(1)

Reference: https://leetcode.com/problems/count-binary-substrings/discuss/1172553/JS-Python-Java-C%2B%2B-or-Easy-Rolling-Count-Solution-w-Explanation
*/

var countBinarySubstrings = function(s) {
    let curr = 1, prev = 0, ans = 0
    //Give a start index 1, loop over the length of s, check if the current number is the same as the previous number. 
    for (let i = 1; i < s.length; i++)
        if (s[i] === s[i-1]){
            //if same, then increase the current sequence
            curr++;
        }
        else {
            //otherwise, we want to grab the shortest consecutive
            ans += Math.min(curr, prev)
            prev = curr
            curr = 1
        }
    return ans + Math.min(curr, prev)
};


```
