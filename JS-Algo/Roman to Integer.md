#### Roman numerals are represented by seven different symbols: `I, V, X, L, C, D` and `M`.
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

#### For example:  
#### `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.


Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. ***Because the one is before the five we subtract it making four***. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

<img width="548" alt="Screen Shot 2021-10-07 at 10 18 09 PM" src="https://user-images.githubusercontent.com/37787994/136502316-25a37f22-594b-4917-88f2-54f7eda2af91.png">

```JS
/**
 * @param {string} s
 * @return {number}
 */
symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

// Input: s = "MCMXCIV"
var romanToInt = function(s) {
    // Remember that, the Roman letter on the front should larger than the later one
    // otherwise, the number is the later letter - earlier letter
    let value = 0;
    for(let i = 0; i < s.length; i++) {
        // 1st: s[i] = M   s[i + 1] = C
        // symbols[s[i]] = M: (1000), symbols[s[i + 1]]: (100)  
        // => value += symbols[s[i]]
        // else value -= symbols[s[i]]
        symbols[s[i]] < symbols[s[i + 1]] ? value -= symbols[s[i]] : value += symbols[s[i]]
    }
    return value;
};
```
