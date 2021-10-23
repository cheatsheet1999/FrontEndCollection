
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
    const words = new Set(wordDict);
     // extract length for each word in the wordDict
    const wordLens = new Set(wordDict.map((word) => word.length));
     // we need to set inital start length to 0
    const startLens = new Set([0]);
    
    for(let startLen of startLens) {
         // this dynamically increases with every starts.add from the latter for loop
        // meaning, we could have differing starts, as a result of cutting down the string with the words we matched
        for(let wordLen of wordLens) { // for every unique length of words
            // we literally try all of the lengths from that start position
            // so this deals with partial permutations
            // as well as duplicates like aa, aaaaa
            if(words.has(s.slice(startLen, startLen + wordLen))) { // do we have a word in our dictionary matching that length of words?
                // if so , add the remaining of the string so we can try starting from there instead
                startLens.add(startLen + wordLen);
                // now we can attempt to try starting from this new location
            }
        }
    }
    return startLens.has(s.length);
};
``` 
