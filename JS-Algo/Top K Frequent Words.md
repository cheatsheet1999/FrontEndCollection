#### Given an array of strings `words` and an integer `k`, return the `k` most frequent strings.

Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order.**

<img width="482" alt="Screen Shot 2021-11-07 at 11 40 52 PM" src="https://user-images.githubusercontent.com/37787994/140695569-19b04861-cb4a-484c-bcf5-0ee9961e77cb.png">

```JS
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
//  O(n log n)
var topKFrequent = function(words, k) {
    const map = {};
    for(let word of words) {
        map[word] = map[word] + 1 || 1;
    }
    let res = Object.keys(map).sort((a, b) => {
        let diff = map[b] - map[a];
        if(diff === 0) {
        /*
        sorting descend in an alphabetic order. i.e. a -> b -> c -> d
        localeCompare() returns one of 3 numbers indicating the sort order.
         -1 if sorted before
          1 if sorted after
          0 if equal
        */
            return a.localeCompare(b);
        }
        else {
            return diff;
        }
    })
    return res.slice(0, k);
};
```
