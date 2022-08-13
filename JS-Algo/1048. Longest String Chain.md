### You are given an array of *words* where each word consists of lowercase English letters.
### *wordA* is a predecessor of *wordB* if and only if we can insert exactly one letter anywhere in *wordA* without changing the order of the other characters to make it equal to *wordB*.

- For example, *"abc"* is a **predecessor** of *"abac"*, while *"cba"* is not a **predecessor** of *"bcad"*

### A word chain is a sequence of words *[word1, word2, ..., wordk]* with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

***Return the length of the longest possible word chain with words chosen from the given list of words.***

<img width="447" alt="Screen Shot 2021-10-28 at 11 42 04 AM" src="https://user-images.githubusercontent.com/37787994/139316232-21f0b334-ee02-46b8-85af-15cd690453c4.png">

Dynamic Programming
Time complexity: `O(N⋅(logN + L^2))`
```JS
/**
 * @param {string[]} words
 * @return {number}
 */

/*
Put the 1st string in to object,
check following strings, if any of the chars in that string is already part of the array that in the object,
then add the length
finally, return the max length of the array, that one is the longest possible word chain
*/
var longestStrChain = function(words) {
    let memory = {}; 
    // Must sort based on words length, because we want to start from the shortest string, and calculate how 
    // long it can go. If we don't sort, in the worst case, the longest string is at the 1st place, since
    // there is not record in memory, the longest would be just 1
    words.sort((a,b) => a.length - b.length)
    for (let word of words){
        let longest = 0; 
        for (let i = 0; i < word.length; i++){
            // Core code, check if this part is alreay part of the string that in the object array
            let pre = word.slice(0,i) + word.slice(i+1);
            longest = Math.max(longest, (memory[pre] || 0)+1)
        }
        memory[word] = longest
    }
    return Math.max(...Object.values(memory));
};
```
