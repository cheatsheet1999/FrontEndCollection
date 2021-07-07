

NC03_Search Element Location

## 描述

在数组 arr 中，查找值与 item 相等的元素出现的所有位置

## 示例1

输入：

```
['a','b','c','d','e','f','a','b','c'] 'a'
```

输出：

```
[0, 6]
```

***The useage of array.forEach*** Based on MDN

```
// Arrow function
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } )
```





```
function findAllOccurrences(arr, target) {
    var list = [];
    arr.forEach((value,index,array) => {
        return (value == target) ? list.push(index) : 0
    })
    return list;
}
```

