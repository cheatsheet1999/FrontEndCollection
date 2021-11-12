
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

<img width="481" alt="Screen Shot 2021-11-12 at 14 12 29" src="https://user-images.githubusercontent.com/37787994/141535051-7931db6e-d3dd-4ef4-bd49-79f3f74b8644.png">

```JS
var fractionToDecimal = function(numerator, denominator) {
    if(!numerator) return '0';
    
    let str = '';
    
    if(Math.sign(numerator) !== Math.sign(denominator)) str += '-';
    
    const numer = Math.abs(numerator)
    const denom = Math.abs(denominator)
    
    str += Math.floor(numer/denom);
    let rem = numer % denom;
    if(!rem) return str;
    str += '.'
    
    const map = new Map();
    
    while(rem !== 0) {
        map.set(rem, str.length);
        /*
        i.e. 
        numer = 2
        denom = 3
        rem = 2 % 3 = 2
        Map {2 => 2}
        */
        rem *= 10;
        str += Math.floor(rem/denom);
        rem %= denom
        
        if(map.has(rem)) {
            const idx = map.get(rem);
            return str.slice(0, idx) + `(${str.slice(idx)})`; 
        }
    }
    return str;
};
```
