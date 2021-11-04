#### Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

#### An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

<img width="450" alt="Screen Shot 2021-11-04 at 12 54 30 AM" src="https://user-images.githubusercontent.com/37787994/140276982-54ec760c-62ed-42de-82f2-adcd90de9a91.png">

```JS
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {};
    let base = 'a'.charCodeAt();
    // get each str from given strs array
    for(let str of strs) {
        let count = new Array(26).fill(0);
        // get each letter of the word
        for(let char of str) {
            count[char.charCodeAt() - base]++;
        }
        let key = count.join(' ');
        // if res already have the charCode key, then push the same str based on the same key, otherwise, create a new one
        // i.e. 
        // res: {'1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0': ['eat']}
        // res: {'1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0': ['eat', 'tea'], '1 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0': ['tan']}
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res)
};


Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)
```
