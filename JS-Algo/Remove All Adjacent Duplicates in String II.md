You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

<img width="473" alt="Screen Shot 2021-11-12 at 00 48 20" src="https://user-images.githubusercontent.com/37787994/141429888-59949d61-19e7-416e-85fd-950796b53fa0.png">

#### Time complexity: O(n), where nn is a string length. We process each character in the string once. 
#### Space complexity: O(n) for the stack.

```JS
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    for(let char of s) {
        if(stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;
            if(stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        }
        else {
            stack.push([char, 1]);
        }
    }
    let res = '';
    /*
    i.e. 
    stack: [['a', 1], ['b', 1], ['c', 1], ['d', 1]]
    key = a, value = 1
    key = b, value = 1
    etc....
    */
    for(let [key, value] of stack) {
        res += key.repeat(value);
    }
    return res;
};
```
