LC27_Remove Element

移动元素 

给定一个数组和一个数值，移除数组内所有的那个值。

非常基本的一道题，利用双指针可以轻松AC



```javascript
var removeElement = function(nums, val) {
  //首先第一个指针指向0，i为慢指针
    let i = 0;
  //第二个指针从0开始移动，直到最后一个数组， j为快指针
    for(let j = 0; j < nums.length; j++) {
      //在移动过程中，只要快指针指向的除val以外的值
        if(nums[j] !== val) {
          //就把慢指针指向的数字替换成快指针指向的非val数字，然后i指针所指的就是新值了
            nums[i] = nums[j];
          //移动到下一个准备被替换的值
            i++;
        }
    }
  //最后返回i的指针长度
    return i;
};
```

