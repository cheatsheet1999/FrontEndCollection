Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

<img width="561" alt="Screen Shot 2021-12-28 at 19 33 52" src="https://user-images.githubusercontent.com/37787994/147621950-b60e874b-e440-49b6-8581-19a2df883c70.png">

<img width="567" alt="Screen Shot 2021-12-28 at 19 34 07" src="https://user-images.githubusercontent.com/37787994/147621962-e32b2b18-ef60-4c87-9637-98d8edaeb2d5.png">

## Newer data structrue (NOT recommended)  
```js
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) 
        this.cache.delete(this.cache.keys().next().value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

### We want to keep the most recent used node, and delete the least recent used node

```
"LRUCache", "put", "put",  "get", "put", "get", "put", "get", "get", "get"   
[2],       [1, 1], [2, 2], [1],  [3, 3],  [2], [4, 4],  [1],   [3],  [4]    
null,      null,   null,    1,    null,   -1,   null,   -1,     3,    4    
```

The following program will insert node on head, which means **most recent used** node is in the front, **least recent used** node is behind, and we wanted to delete LRU when exceed capacity   

Steps are:  
```
2,2 -> 1, 1
get 1

1, 1 -> 2, 2

put 3, 3
3, 3 -> 1, 1

put 4, 4
4, 4 -> 3, 3
```



## Real LRU solution
```js
var Node = function(key, value) {
    this.key = key;
    this.val = value;
    this.prev = this.next = null;
}
/**
 * DoublyLinkedList Class
 * @constructor initilize head & tail
 * @action insertHead
 * @action removeNode
 * @action moveToHead
 * @action removeTail
 */
var DoublyLinkedList = function() {
    this.head = new Node;
    this.tail = new Node;
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

/**
 * Insert a new node right after head
 * @param {Node} node
 */
DoublyLinkedList.prototype.insertHead = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

/**
 * Remove a node from the linked list
 * @param {Node} node
 */
DoublyLinkedList.prototype.removeNode = function(node) {
    // console.log("trying to remove node:", node.key)
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
}

/**
 * Move a node to the head
 * @param {Node} node
 */
DoublyLinkedList.prototype.moveToHead = function(node){
    this.removeNode(node);
    this.insertHead(node);
}

/**
 * Remove the tail element and return its key
 * @return {String}
 */
DoublyLinkedList.prototype.removeTail = function() {
    let tail = this.tail.prev;
    this.removeNode(tail);
    return tail.key;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.hash = new Map();
    this.dll = new DoublyLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash.get(key);
    if (!node) return -1;
    this.dll.moveToHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.hash.get(key);
    if (node==null) { // new node
        let newNode = new Node(key, value);
        this.hash.set(key, newNode);
        this.dll.insertHead(newNode);
        this.currentSize++;
        if (this.currentSize > this.capacity) {
            let tailKey = this.dll.removeTail();
            this.hash.delete(tailKey);
            this.currentSize--;
        }
    } else { // existed node, update its value and move to head;
        node.val = value;
        this.dll.moveToHead(node);
    }
};
```
