```js
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // 获取基准值的正确位置
    const pivotIndex = partition(arr, left, right);

    // 对基准值左侧的部分进行快速排序
    quickSort(arr, left, pivotIndex - 1);

    // 对基准值右侧的部分进行快速排序
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // 选择最右侧的元素作为基准值
  const pivot = arr[right];
  // i指向小于基准值的最后一个元素
  let i = left - 1;
  for (let j = left; j < right; j++) {
    // 如果当前元素小于或等于基准值
    if (arr[j] <= pivot) {
      i++;
      // 交换arr[i]和arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // 将基准值放到中间，即所有小于基准值的元素之后
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  // 返回基准值的索引
  return i + 1;
}

```
