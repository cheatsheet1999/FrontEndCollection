### In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
### Given a sequence of _words_ written in the alien language, and the _order_ of the alphabet, return _true_ if and only if the given _words_ are sorted lexicographically in this alien language.

<img width="452" alt="Screen Shot 2021-09-21 at 5 10 46 PM" src="https://user-images.githubusercontent.com/37787994/134263594-91f0f841-cfea-4652-82f1-80381df79590.png">



```Javascript
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = new Map();
    for (let i = 0; i < order.length; i++) {
    //map stores all letters in 'orders' and its corresponding index
        map.set(order[i], i);
    } 

    for (let j = 1; j < words.length; j++) {
        let prev = words[j-1];
        let curr = words[j];
        //For example, ["hello","leetcode"], prev[0] = 'h', curr[0] = 'l', and l cannot come before h
        if (map.get(prev[0]) > map.get(curr[0])) {
            return false;
        } 
        else if (prev[0] === curr[0]) {
            let pointer = 1;
            
            //We must check if pointer is out of index, otherwise for test case like prev: 'hello'
            //curr: 'hello', the while loop never stops.
            while (prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) {
                pointer++;
            }
            /* 
            if prev[pointer] is in orders (so at least is has 0 in map), but curr[pointer] is not in order, 
            then return false. Works for ["apple","app"], since l and e is not in map
            Also, in the example words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz", 
            we can see that the index of l is smaller than the index of d. But should be vice versa since
            d came before l, map.get(prev[pointer]) < map.get(curr[pointer] is correct.
            */
             if ((map.get(prev[pointer]) >= 0 && !map.get(curr[pointer])) || map.get(prev[pointer]) > map.get(curr[pointer])) {
                 return false;
             }
        }
    }
    return true;
};
```
