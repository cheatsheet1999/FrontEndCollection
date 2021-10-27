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
    let list = new ListNode(0);
    let head = list;
    let sum = 0;
    let carry = 0
    
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
            sum = sum - 10;
        }
        
        head.next = new ListNode(sum);
        head = head.next;
        
        sum = carry;
        carry = 0;
    }
    return list.next;
};
``` 
