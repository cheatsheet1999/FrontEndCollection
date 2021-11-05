#### Design a data structure that will be initialized with a string array, and then it should answer queries of the shortest distance between two different strings from the array.

#### Implement the `WordDistance` class:
- `WordDistance(String[] wordsDict)` initializes the object with the strings array `wordsDict`.
- `int shortest(String word1, String word2)` returns the shortest distance between `word1` and `word2` in the array `wordsDict`.

<img width="441" alt="Screen Shot 2021-11-04 at 7 59 23 PM" src="https://user-images.githubusercontent.com/37787994/140451077-5257962d-e40d-4363-adb7-94205db3cb92.png">


```JS
/**
 * @param {string[]} wordsDict
 */
 
 /*
 wordsDict: ['practice', 'makes', 'perfect', 'coding', 'makes']
 map: {practice: [0], makes: [1, 4], perfect: [2], coding: [3]}
 */
var WordDistance = function(wordsDict) {
    let map = {};
    for(let i = 0; i < wordsDict.length; i++) {
        if(map[wordsDict[i]] == null) map[wordsDict[i]] = [];
         map[wordsDict[i]].push(i);
    }
    this.map = map;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let w1 = this.map[word1];
    let w2 = this.map[word2];
    let minDist = Infinity;
    let w1Index = 0, w2Index = 0;
    while(w1Index < w1.length && w2Index < w2.length) {
        minDist = Math.min(minDist, Math.abs(w1[w1Index] - w2[w2Index]));
        if(w1[w1Index] < w2[w2Index]) 
            w1Index++;
        else 
            w2Index++;
    }
    return minDist
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
```
