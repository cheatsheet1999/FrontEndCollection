#### Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
#### A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
#### If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

<img width="480" alt="Screen Shot 2021-11-10 at 19 49 45" src="https://user-images.githubusercontent.com/37787994/141228655-876ef1fc-eea5-4d3d-b529-a18f9c6bf394.png">

<img width="464" alt="Screen Shot 2021-11-10 at 19 50 03" src="https://user-images.githubusercontent.com/37787994/141228689-b56d6ce1-69bb-4d37-9e68-bdb7807b2c12.png">


```js
class ListNode {
  constructor(val, next) {
    this.val = val == undefined ? 0 : val;
    this.next = next == undefined ? null : next;
  }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.getLength()) return -1;
    let cur = this.head;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    node.next = this.head;
    this.head = node;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head == null) {
        this.addAtHead(val);
        return;
    }
    let node = new ListNode(val);
    let cur = this.head;
    while (cur.next !== null) {
        cur = cur.next;
    }
    cur.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.getLength()) {
        this.addAtTail(val);
        return;
    }
    if (index > this.getLength()) return;
        
    let cur = this.head;
    let node = new ListNode(val);
    for (let i = 0; i < index-1; i++) {
        cur = cur.next;
    }
    let next = cur.next;
    cur.next = node;
    node.next = next;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.getLength()) return;
    if (index == 0) {
        this.head = this.head.next;
        return;
    }

    let cur = this.head;
    for (let i = 0; i < index-1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
};

MyLinkedList.prototype.getLength = function() {
    let len = 0, cur = this.head;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }
    return len;
};
```
