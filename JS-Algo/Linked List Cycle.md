### Given `head`, the head of a linked list, determine if the linked list has a cycle in it.  
 
### There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that pos is not passed as a parameter.**  

### Return `true` if there is a cycle in the linked list. Otherwise, return `false`.  

<img width="537" alt="Screen Shot 2021-09-26 at 9 41 00 PM" src="https://user-images.githubusercontent.com/37787994/134846398-4f509bbb-d350-4a44-81c3-0e44ee406c29.png">  

Time complexity : O(n)
Space Complexity: O(1)
```JS
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) {
            return true;
        }
    }
    return false;
};
```
