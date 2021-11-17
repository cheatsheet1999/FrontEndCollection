A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

Given three integers a, b and c, return any string s, which satisfies following conditions:

s is happy and longest possible.
s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
s will only contain 'a', 'b' and 'c' letters.
If there is no such string s return the empty string "".

<img width="483" alt="Screen Shot 2021-11-16 at 23 38 35" src="https://user-images.githubusercontent.com/37787994/142147483-a74362e2-54d6-41b0-957d-73a91d80301b.png">


```JS
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let arr = [['a', a, 0], ['b', b, 0], ['c', c, 0]];
    arr.sort((a, b) => b[1] - a[1]);
    
    let res = '';
    let last = '';
    let count = a + b + c;
    
    while(res.length < count) {
        let i = 0;
        // 1. the first part makes sure to clear repeating times if other letters happend in between
        // i need to smaller than 3 because there only contains 3 letters a, b, c
        while(i < 3) {
            // if last letter is not current letter, that means something in between and we
            // should clear the continuing count
            if(last !== arr[i][0]) {
                arr[i][2] = 0;
            }
            i++;
        }
        
        //2. The second part append letter in res if not over 2 letters
        let j = 0;
        // if current letter is already repeat two times, move to next letter
        while(j < 3 && arr[j][2] === 2) {
            j++;
        }
        // if still have remaining for that letter
        if(arr[j] && arr[j][1] > 0) {
            res += arr[j][0];
            last = arr[j][0];
            arr[j][1]--;
            arr[j][2]++
            arr.sort((a, b) => b[1] - a[1]);
        }
        else {
            return res;
        }
    }
    return res
};
```
