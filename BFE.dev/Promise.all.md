

<img width="817" alt="Screenshot 2024-04-10 at 7 50 58 PM" src="https://github.com/cheatsheet1999/FrontEndCollection/assets/37787994/e23ebcf7-b841-42f3-88d7-41f58de95b4b">
<img width="817" alt="Screenshot 2024-04-10 at 7 51 14 PM" src="https://github.com/cheatsheet1999/FrontEndCollection/assets/37787994/ef4f294e-2a7e-4e30-915e-7b70ecfb9416">

```js
/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completedPromises = 0;
    
        if (promises.length === 0) {
          resolve(results); // 如果输入数组为空，立即解决
        }
    
        promises.forEach((promise, index) => {
          // Promise.resolve() 用于处理非 Promise 值
          Promise.resolve(promise).then(value => {
            results[index] = value;
            completedPromises ++;
    
            // 如果所有 Promises 都解决了，解决 promiseAll 返回的 Promise
            if (completedPromises === promises.length) {
              resolve(results);
            }
          }).catch(reject); // 如果任何 Promise 被拒绝，拒绝 promiseAll 返回的 Promise
        });
      });
  }
```
