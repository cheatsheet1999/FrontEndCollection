
#### Given a string s and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

#### Note that the same word in the dictionary may be reused multiple times in the segmentation.






Time complexity : O(n^3) For every starting index, the search can continue till the end of the given string.

Space complexity : O(n) Queue of at most nn size is needed.

<img width="446" alt="Screen Shot 2021-10-22 at 5 45 28 PM" src="https://user-images.githubusercontent.com/37787994/138535857-cbf0b17b-4f3b-486d-858c-81086c0abfe9.png">


```JS
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let word = new Set(wordDict);
    let length = new Set(wordDict.map((word) => word.length));
    let start = new Set([0]);
    for(let i of start) {
        for(let j of length) {
            if(word.has(s.slice(i, i + j))) {
                start.add(i + j);
            }
        }
    }
    return start.has(s.length)
};
``` 
