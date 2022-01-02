

```js
class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.list = [];
    }
    
    insert(val) {
        if(this.map.has(val)) return false;
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }
    
    remove(val) {
        if(!this.map.has(val)) return false;
        let idx = this.map.get(val);
        this.swap(idx, this.list.length - 1);
        this.list.pop();
        // make sure this is not the 'last' index, instead, it is the index that just be removed
        // 0, 1, 2, 3, 4
        // 0, 4, 2, 3, 1
        // 0, 4, 2, 3
        // 0, 1, 2, 3
        this.map.set(this.list[idx], idx);
        this.map.delete(val);
        return true;
    }
    
    getRandom() {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
    
    swap(a, b) {
        [this.list[a], this.list[b]] = [this.list[b], this.list[a]];
    }
}
```
