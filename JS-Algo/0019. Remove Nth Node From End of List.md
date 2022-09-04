Given the **head** of a linked list, remove the **nth** node from the end of the list and return its head.

<img width="645" alt="Screen Shot 2021-09-13 at 11 21 48 PM" src="https://user-images.githubusercontent.com/37787994/133205527-e328aaf4-6fa8-4599-bf45-ed8a4c8035ef.png">

<img width="652" alt="Screen Shot 2021-09-13 at 11 45 22 PM" src="https://user-images.githubusercontent.com/37787994/133208553-6c8007e5-f8b6-49e4-a9fc-24f8c0332cd7.png">


```Javascript
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(!fast) return head.next;
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};
```
