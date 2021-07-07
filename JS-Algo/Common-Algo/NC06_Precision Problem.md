

NC06_Precision Problem



```
描述
求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
示例1
输入：
3, 0.0001
复制
输出：
0.0003

```



```js
function multiply(a, b) {
   let a1 = a.toString(); //3
   let b1 = b.toString(); //0.1
    let len = Math.max(a1.length - 1 - a1.indexOf("."), b1.length - 1 - b1.indexOf("."))
    return parseFloat(a * b).toFixed(len);
}
```

