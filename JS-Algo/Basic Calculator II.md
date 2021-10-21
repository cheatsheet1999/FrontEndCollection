


#### Given a string `s` which represents an expression, evaluate this expression and return its value. 

#### The integer division should truncate toward zero.

#### You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

#### Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.

```
Example 1:

Input: s = "3+2*2"
Output: 7


Example 2:

Input: s = " 3/2 "
Output: 1


Example 3:

Input: s = " 3+5 / 2 "
Output: 5
```


```js
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let num = '';
  let sign = null
  // we loop till the full length of the array to account for last sign
  for(let i = 0; i <= s.length; i++){    
    const curr = s[i];
    //handle space
    if(curr === ' ') continue;
    //if char is a number
    if(!isNaN(curr)) num+=curr;
    //if we have a  sign + - / *
    if(isNaN(curr)){
      num = Number(num)
      switch(sign){
        case '+':
        case null:
          //we push the initial number into the stack
          stack.push(num)
          break;
        case '-':
          //we push any values after the subtraction sign as negative
          stack.push(-num)
          break; 
        case '*':
          //we pop the stack then multiply and push back
          stack.push(stack.pop()*num)
          break;
        case '/':
          //we pop the stack then devide and push back
          stack.push(parseInt(stack.pop()/num, 10))
          break;           
      }
      // sign becomes current sign
      sign = curr;
      // we reset num
      num = '';
    }
  }
  //we reduce the array adding positive and negative numbers
  return stack.reduce((a,b)=>{
    return a+b
  },0)
};
```
