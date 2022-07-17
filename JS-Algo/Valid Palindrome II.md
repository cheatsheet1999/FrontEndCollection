Given a string `s`, return `true` if the `s` can be palindrome after deleting **at most one** character from it.

<img width="548" alt="Screen Shot 2021-09-30 at 12 30 12 AM" src="https://user-images.githubusercontent.com/37787994/135407389-f643b673-2950-470c-abb7-912439e0eed0.png">


**Time complexity: O(n)**  
**Space complexity: O(1)**  


```JS
/**
 * @param {string} s
 * @return {boolean}
 */
 
 /*
1. Use two pointers, one initialised to 0 and the other initialised to end of string. Check if characters at each index
are the same. If they are the same, shrink both pointers. Else, we have two possibilities: one that neglects character
at left pointer and the other that neglects character at right pointer. Hence, we check if s[low+1...right] is a palindrome
or s[low...right-1] is a palindrome. If one of them is a palindrome, we know that we can form a palindrome with one deletion 
and return true. Else, we require more than one deletion, and hence we return false.
*/
var validPalindrome = function(s) {
    let low = 0, high = s.length - 1;
    while(low < high) {
        if(s[low] !== s[high]) {
        // findPalin(s, low + 1, high) is NESSECARRY because otherwise cannot pass the case of 'deeee'
            return findPalin(s, low + 1, high) || findPalin(s, low, high - 1);
        }
        low++;
        high--;
    }
    return true;
};

function findPalin(s, low, high) {
    while(low < high) {
        if(s[low] !== s[high]) {
            return false;
        }
        low++;
        high--;
    }
    return true;
}

```
