Given a string _s_, find the length of the **longest substring** without repeating characters.

<img width="544" alt="Screen Shot 2021-09-23 at 8 13 14 PM" src="https://user-images.githubusercontent.com/37787994/134612616-3601f1c9-73e8-46b6-ad1d-481965ce89c8.png">


```JS
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    //initial longest substring is 0
    let longest = 0;
    let slow = 0;
    //fast pointer traverse the string
    for(let fast = 0; fast < s.length; fast++) {
        //if the set already has that letter
        while(set.has(s[fast])) {
            //then remove that letter
            set.delete(s[slow]);
            //check the next letter
            slow++;
        }
        //add current into set
        set.add(s[fast]);
        //compare current length with longest length
        longest = Math.max(longest, fast - slow + 1);
    }
    return longest
};
```
