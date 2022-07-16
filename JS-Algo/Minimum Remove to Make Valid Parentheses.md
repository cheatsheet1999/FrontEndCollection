### Given a string s of '(' , ')' and lowercase English characters.

### Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return **any** valid string.


Formally, a parentheses string is valid if and only if:
- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.



<img width="534" alt="Screen Shot 2021-09-24 at 10 32 22 PM" src="https://user-images.githubusercontent.com/37787994/134759788-2b558f93-53ae-401b-910f-852d3d0ec823.png">


![removeparen](https://user-images.githubusercontent.com/37787994/134759856-c00e4add-8c2b-47e3-8783-b9d35a9dc3ce.gif)


**Using a Stack**
**Time complexity : O(n)O, where nn is the length of the input string.**

**Space complexity : O(n), We are using a stack, and so require up to O(n) space.**

## Steps
1. Split string s into multiple parts
2. Create a stack to store parenthesis' index
3. Traverse the `s` array
   - if we find `(`, then push to stack
   - else if we find `)`
     - if stack is not empty, we pop
     - else we make the corresponding letter become empty
4. Empty the stack,  make the corresponding letter become empty
5. Join the string


```JS
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    s = s.split('');
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(i);
        }
        else if(s[i] === ')') {
            if(stack.length) {
                stack.pop();
            }
            else {
                s[i] = '';
            }
        }
    }
    
    /*
     without this line
     input:  "))(("
     output: "(("
     Expected: ""
     NOTE! we can only use for...of, since we are tring to 
     get VALUE, for example, 2 and 3 from the stack,
     instead of traverse the stack from 0
     */
    for(let i of stack) {
        s[i] = '';
    }
    return s.join('');
};
```
