#### Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

#### You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

<img width="471" alt="Screen Shot 2021-11-12 at 21 46 26" src="https://user-images.githubusercontent.com/37787994/141605990-e2de71b1-3f8d-4240-99ab-952f7f1fa1c3.png">

```JS
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let sum = '';
    let carry = 0;
    for(let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        let digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
        let digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
        let currSum = digit1 + digit2 + carry;
        // currSum % 10 cannot be currSum - 10, because the first digit may not larger than 10, then cause negative number
        sum = `${currSum % 10}${sum}`;
        carry = Math.floor(currSum / 10);
    }
    return sum
};
```
