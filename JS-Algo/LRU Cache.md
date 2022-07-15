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
1，1 -> 2, 2
get 1

2, 2 -> 1, 1

put 3, 3
1,1 -> 3, 3

put 4, 4
3,3 -> 4, 4
```




## Real LRU solution
```js
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, val) {
    const newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  remove(node) {
    if (!node.next && !node.prev) {
      // if there's only 1 node
      this.head = null;
      this.tail = null;
    } else if (!node.next) {
      // if the node is tail node
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) {
      // if the node is head node
      this.head = node.next;
      this.head.prev = null;
    } else {
      // if the node is in between
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

class LRUCache {
  constructor(capacity) {
    this.DLL = new DoublyLinkedList();
    this.map = {};
    this.capacity = capacity;
  }

  get(key) {
    if (!this.map[key]) return -1;
    const value = this.map[key].val;
    this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.push(key, value);
    return value;
  }

  put(key, value) {
    // replace the old key with the new key
    if (this.map[key]) this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.push(key, value);
    if (this.DLL.length > this.capacity) {
      delete this.map[this.DLL.head.key];
      this.DLL.remove(this.DLL.head);
    }
  }
}

```
