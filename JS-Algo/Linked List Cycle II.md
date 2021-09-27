### Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

### There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to (0-indexed). It is -1 if there is no cycle. **Note that pos is not passed as a parameter.**

<img width="558" alt="Screen Shot 2021-09-26 at 9 48 56 PM" src="https://user-images.githubusercontent.com/37787994/134846952-f1d9086e-266c-4824-924f-a4c8bbaaeef9.png">

Time complexity : O(n)  
Space complexity : O(1)  

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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            slow = head;
            while(slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null
};
```
