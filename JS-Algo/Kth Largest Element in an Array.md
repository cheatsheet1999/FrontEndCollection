
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

let quickSelect = function(arr, start, end, k) {
    let pivot = partition(arr, start, end);
     /**
     * Use pivotIndex as the seperater. If k is smaller than the length of the 
     * right side of the array, the target is in the right side of the array. 
     * If k is larger, the target is in the left side of the array. 
     */
    if(k < arr.length - pivot) {
        return quickSelect(arr, pivot + 1, end, k);
    } else if(k > arr.length - pivot) {
        return quickSelect(arr, start, pivot - 1, k);
    }
     // pivotIndex is the index of the target if k equals to the length of the 
    // right side of the array.
    return arr[pivot];
}

let partition = function(arr, start, end) {
    /**
     * Use the last element as pivot for simplicity. Randomized pivot 
     * is a better way to avoid worst case where the the largest or the smallest 
     * element is always selected.
     */
    let pivot = arr[end];
    let i = start;
    let j = end - 1;
     // move all numbers smaller than pivot to the left and larger to the right
    while(i <= j) {
        while(arr[i] < pivot) {
            i += 1;
        }
        while(arr[j] > pivot) {
            j -= 1;
        }
        if(i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }
    // Swap pivot value to the position so that all numbers larger than pivot value 
    // is on the right, and smaller on the left.
    swap(arr, i, end);
    // return the final index where the pivot value is.
    return i;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
```
