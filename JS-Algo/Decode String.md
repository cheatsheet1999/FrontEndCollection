
#### Given an encoded string, return its decoded string.

#### The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

#### You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

#### Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like `3a` or `2[4]`.



Time complexity: O(maxK * n) where maxK is the maximum value of kk and nn is the length of a given string ss. We traverse a string of size nn and iterate kk times to decode each pattern of form k[string]. This gives us worst case time complexity as (maxK⋅n).

Space Complexity: O(m + n)

```JS
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ']') {
            stack.push(s[i]);
            continue;
        }
       
			 // start of char part
        let str = '';
				//always get the char that is before ]
        let cur = stack.pop();
        while(cur !== '[') {
            str = cur + str;
            cur = stack.pop();
        }
        
        //start of the number part
        let num = '';
        //on the char part, we stop at [, 
        // we know that there must be a number before [
        cur = stack.pop();
        // as long as that is a number, 
        // because there might be a large number, like 23
        while(!Number.isNaN(Number(cur))) {
            num = cur + num;
            cur = stack.pop();
        }
        //  //previous step will pop element from stack, so we need to push it back
        stack.push(cur);
        stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
};
``` 
