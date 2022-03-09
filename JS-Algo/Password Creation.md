<img width="520" alt="Screen Shot 2022-03-08 at 18 56 51" src="https://user-images.githubusercontent.com/37787994/157357352-b07a0848-0291-48cf-82bf-839a961f5ae1.png">
<img width="520" alt="Screen Shot 2022-03-08 at 18 56 41" src="https://user-images.githubusercontent.com/37787994/157357356-84fff8fc-9ed2-49eb-b609-3e8d092b8a70.png">


```js
function newPassword(a, b) {
    // Write your code here
    let res = '';
    let count = 0;
    let minLength = Math.min(a.length, b.length);
    for(let i = 0; i < minLength; i++) {
        res += a[i] + b[i];
        count += 1;
    }
    if(a.length > b.length) {
        for(let i = count; i < a.length; i++) {
            res += a[i];
        }
    }
    else {
        for(let i = count; i < b.length; i++) {
            res += b[i];
        }
    }
    return res;
}
```
