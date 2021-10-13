

Dynamic Programming
Time complexity: O(N⋅(logN + L^2)).
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
