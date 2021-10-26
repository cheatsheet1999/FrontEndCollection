#### Given two equal-size strings `s` and `t`. In one step you can choose any character of `t` and replace it with another character.

#### _Return the minimum number of steps to make t an anagram of s._

#### An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

<img width="450" alt="Screen Shot 2021-10-26 at 3 32 36 PM" src="https://user-images.githubusercontent.com/37787994/138970406-d90e7f30-ce8c-4b0a-8ee8-dff3a12f6f5d.png">


```JS
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map = {};
    let changes = 0;
    
    for(let letter of s) {
        if(map[letter]) map[letter]++;
        else map[letter] = 1;
    }
    
    for(let letter of t) {
        if(map[letter]) map[letter]--;
        else changes++;
    }
    return changes
};
```
