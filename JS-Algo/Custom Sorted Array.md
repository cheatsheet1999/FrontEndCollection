* In an array, we can swap the elements at any two indices in a single operation called a move.

* For example, if our array is a = [17, 4, 8], we can swap a[0] = 17 and a[2] = 8 to get a =

* [8, 4, 17] in a single move. 
### We want to custom sort an array such that all of the even elements are at the beginning of the array and all of the odd elements are at the end of the array.

* Note : the order of elements within even or odd doesn't matter. *

* Constraints : * 2 <= n <= 10^5

* 1 <= a[i] <= 10^9, where 0 <= i <= n

* it is guaranteed that array a contains at least one even and one odd element.

#### Example: arr[6,3,4,5]
#### The following four arrays are valid custom sorted arrays
- a = [6,4,3,5]
- a = [4,6,3,5]
- a = [6,4,5,3]
- a = [4,6,5,3]




```JS
function moves(a) {
    // Write your code here
    let left = 0;
    let right = a.length - 1;
    let temp = 0;
    let count = 0;
    while(left < right) {
        if(a[left] % 2 !== 0) {
            while (a[right] % 2 !== 0 && right > left) {
                right--;
            }
            if (left !== right) {
                temp = a[right];
                a[right] = a[left];
                a[left] = temp;
                right--;
                left++;
                count++;
            }
        } else {
                left++;
            }
        }
        return count;
    }
```


[Tiktok]
