A string s is called good if there are no two different characters in s that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

<img width="486" alt="Screen Shot 2021-11-27 at 00 29 04" src="https://user-images.githubusercontent.com/37787994/143672530-a5b7bea0-faa6-49e6-b27f-fe6398b630e6.png">

```js
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let arr = Array(26).fill(0)
    let res = 0
    let base = 'a'.charCodeAt();
    
    for(let i=0;i<s.length; i++){
        let index = s[i].charCodeAt() - base;
        arr[index]++
    }
    
    arr.sort((a,b)=>b-a)
    
    for(let i=1; i<26; i++){
        while(arr[i] && arr[i] >= arr[i-1]){
            arr[i]--
            res++
        }
    }
    
    return res
};
```
