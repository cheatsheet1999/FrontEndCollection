#### You are given two non-empty linked lists representing two _non-negative_ integers. The digits are stored in _reverse order_, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

#### You may assume the two numbers do not contain any leading zero, except the number 0 itself.


<img width="441" alt="Screen Shot 2021-10-27 at 12 01 24 AM" src="https://user-images.githubusercontent.com/37787994/139016117-51c066ff-3b1c-4858-b19e-1f4ed7eb38f8.png">


```JS
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // dummy head
    let list = new ListNode(0);
    let head = list;
    let sum = 0;
    let carry = 0;
    
    while(l1 !== null || l2 !== null || sum > 0) {
        if(l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum >= 10) {
            carry = 1;
            // 12 => 2, 13 => 3
            sum = sum - 10;
        }
        
        head.next = new ListNode(sum);
        head = head.next;
        
        // sum take the extra 1 from carry
        sum = carry;
        carry = 0;
    }
    return list.next;
};
``` 
