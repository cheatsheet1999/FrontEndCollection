Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


<img width="561" alt="Screen Shot 2021-09-24 at 9 02 44 PM" src="https://user-images.githubusercontent.com/37787994/134757223-80983f82-3ee3-4b29-8e38-2377b7cf3929.png">


```JS
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for(let i = 0; i < strs[0].length; i++) {
        for(let str of strs) {
            if(str[i] !== strs[0][i]) return str.slice(0, i);
        }
    }
    return strs[0];
};
``` 
