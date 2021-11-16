Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

<img width="499" alt="Screen Shot 2021-11-15 at 20 13 46" src="https://user-images.githubusercontent.com/37787994/141889319-e20271bf-dc39-4807-a537-90bc66a375d2.png">

```js
var reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
};
```
