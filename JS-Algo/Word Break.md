
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
    const wordLens = new Set(wordDict.map((word) => word.length))
    // we need to set inital start length to 0
    const starts = new Set([0])
    for (let start of starts) { 
        // this dynamically increases with every starts.add from the latter for loop
        // meaning, you could have differing starts, as a result of cutting down the string with the words we matched
        for (let len of wordLens) { // for every unique length of words
            // you literally try all of the lengths
            // so this deals with partial permutations
            // as well as duplicates like aa, aaaaa
            if (words.has(s.slice(start, start + len))) { // do we have a word in our dictionary matching that length of words?
                starts.add(start + len) 
                // if so , add the remaining of the string so u can try starting from there instead
                // now u can attempt to try starting from this new location
            }
        }
    }
    return starts.has(s.length) // so long as the set has your length, it means that you managed to find a perfect match
};
``` 
