Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

<img width="479" alt="Screen Shot 2021-11-16 at 18 27 44" src="https://user-images.githubusercontent.com/37787994/142092460-da8598ae-15cb-4e7b-b3fe-d512d099f591.png">

Two pointers
T.C O(n)
S.C O(1)

```JS
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
};
```
