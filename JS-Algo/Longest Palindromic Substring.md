### Given a string `s`, return the longest palindromic substring in `s`.

<img width="550" alt="Screen Shot 2021-09-29 at 12 23 53 AM" src="https://user-images.githubusercontent.com/37787994/135222000-bb169d28-6b94-4a2f-9a17-c0beec55302c.png">



Time complexity : O(n^2). Since expanding a palindrome around its center could take O(n) time, the overall complexity is O(n^2). Space complexity : O(1)

```JS
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     let longest = '';
    //i is pointing to left, j is pointing to the right
    const findLongestPalindrome = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(i + 1, j);
    }
    for (let i = 0; i < s.length; i++) {
        // palindrome around 1 letter
        const type1 = findLongestPalindrome(s, i, i);
        // two consequtive numbers are palindrome, and around 2 letters
        const type2 = findLongestPalindrome(s, i, i + 1);
        const longerPalindrome = type1.length > type2.length ? type1 : type2;
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        } 
    }
    return longest;
};
```
