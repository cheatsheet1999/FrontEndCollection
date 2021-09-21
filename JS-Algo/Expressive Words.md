### The description for the problem might be a little confusing, but basically what the question is saying is that one word is "strechy" with respective to S if S can be derived by "extend" the word, where the extend rule is that  

- For any group of same continuous characters in word, you can keep them as it is, or you can extend them with the same characters so that the size of this extended group must be >= 3.  

**For example, for word="ddiinnso", its groups of same continuous characters are ["dd", "ii", "nn", "s", "o"], therefore it is "strechy" with respective to S="dddiiiinnssssssoooo" because we just extend "dd"->"ddd", "ii"->"iiii", keep "nn" as it is, "s"->"ssssss" and "o"->"oooo".**

```Javascript
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    function isExpressive(word) {
        let windex = 0;
        let sindex = 0;
        while(windex < word.length || sindex < s.length) {
        //self is 1, so at least there is 1
            let wCount = 1;
            let sCount = 1;
            if(word[windex] !== s[sindex]) return false;
            while(word[windex] === word[windex++ + 1]) wCount++;
            while(s[sindex] === s[sindex++ + 1]) sCount++;
            /*
            countS < 3 means there the string in s does not have 3 consequtive letters, that's why after countS++, the countS < 3
            if they don't want to stetch, sCount and wCount may stay what it was, so that's why we need to check if sCount !== wCount because
            if they do not stretch, then sCount may smaller than 3 and that is acceptable.
            */
            if(sCount < wCount || (sCount !== wCount && sCount < 3)) return false;
        }
        return true;
    }
    
    return words.filter(isExpressive).length;
};
```
