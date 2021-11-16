Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.    

<img width="498" alt="Screen Shot 2021-11-15 at 20 02 55" src="https://user-images.githubusercontent.com/37787994/141888244-503ff480-4fdb-422e-90d0-de3fb6d4dfd8.png">


```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0, j = s.length - 1;
    while (i < j) { 
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
  }
};
```
