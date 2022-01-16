
<img width="715" alt="Screen Shot 2022-01-16 at 01 41 21" src="https://user-images.githubusercontent.com/37787994/149653107-d6ac5a83-196c-4962-a8b5-ec312e13df33.png">


![IMG_0919](https://user-images.githubusercontent.com/37787994/149653116-d6825f95-4ecb-412e-83ba-c4181aa330b2.jpg)


```js
// T.C. O(logn)
var myPow = function(x, n) {
    if (n===0) return 1;
    
    let pow = Math.abs(n);
    
	let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
    
    return n < 0 ? 1/result : result;
};
```
