
### Given *n* non-negative integers representing an elevation map where the width of each bar is *1*, compute how much water it can trap after raining.

<img width="647" alt="Screen Shot 2021-09-16 at 11 57 41 PM" src="https://user-images.githubusercontent.com/37787994/133738506-de90c1a7-63c2-45bf-ac74-964809fe0111.png">


```Javascript
/**
 * @param {number[]} height
 * @return {number}
 */
 /*
 Time complexity: O(n)O(n). Single iteration of O(n)O(n).
Space complexity: O(1)O(1) extra space. 
 */
function trap(height) {
  if (!height.length) return 0;

  let l = 0;
  let r = height.length - 1;

  let lMax = 0;
  let rMax = 0;

  let res = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    if (height[l] < lMax) {
      res += lMax - height[l];
    }

    rMax = Math.max(rMax, height[r]);
    if (height[r] < rMax) {
      res += rMax - height[r];
    }

    height[l] < height[r] ? l++ : r--;
  }

  return res;
}

```
