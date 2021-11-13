
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

<img width="481" alt="Screen Shot 2021-11-12 at 14 12 29" src="https://user-images.githubusercontent.com/37787994/141535051-7931db6e-d3dd-4ef4-bd49-79f3f74b8644.png">

```JS
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
/*
1. if no numerator, return '0' immediately
2. initalize an empty string
3. if the sign of denominator and numerator aren't the same, add a - sign in string
4. take the absolute value of numerator and demoninator
5. numer / denom to find integer place
6. use numerator % denominator to find reminder
7. if no reminder, return the str contained integer, otherwise, add a decimal place
8. Create a Hashmap, {reminder => str.length}
9. as long as reminder is not 0
9. rem * 10, and new decimal place becames reminder / denominator
10. get new reminder by using rem %= denom
11. if map has the same reminder, that means it is a repeating fraction
12. use index to get where is the first repeating part in the map
13. use str.slice method to add parenthesis for the repeating part
*/
var fractionToDecimal = function(numerator, denominator) {
    if(!numerator) return '0'
    let str = '';
    if(Math.sign(numerator) !== Math.sign(denominator))
        str += '-';
    
    let numer = Math.abs(numerator);
    let denom = Math.abs(denominator);
    str += Math.floor(numer/denom);
    let rem = numer % denom;
    if(!rem) 
        return str;
    str += '.';
    
    const map = new Map();
    while(rem !== 0) {
        map.set(rem, str.length);
        rem *= 10;
        str += Math.floor(rem / denom);
        rem %= denom;
    
        if(map.has(rem)) {
            let index = map.get(rem) // get the length where starts to repeat
            return str.slice(0, index) + `(${str.slice(index)})`;
        }
    }
    
    return str
};
```
