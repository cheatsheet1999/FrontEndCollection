NC04_Pass Parameter

## 描述

将数组 arr 中的元素作为调用函数 fn 的参数

## 示例1

输入：

```
function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']
```

输出：

```
Hello, Ellie!
```

```js
function argsAsArray(fn, arr) {
    return fn.apply(this,arr);
}
```

