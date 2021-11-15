
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

#### Extacly same as Two sum question, just needed to add +1 on index

<img width="469" alt="Screen Shot 2021-11-14 at 17 39 56" src="https://user-images.githubusercontent.com/37787994/141705803-88630c93-559c-4cb1-a3e1-55b33b36012b.png">



```JS
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map();
    for(let i = 0; i < numbers.length; i++) {
        if(map.has(target - numbers[i])) {
            return [map.get(target - numbers[i]), i + 1];
        }
        map.set(numbers[i], i + 1);
    }
    return -1;
};
```
