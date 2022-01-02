Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
<img width="574" alt="Screen Shot 2022-01-02 at 00 38 10" src="https://user-images.githubusercontent.com/37787994/147869306-4ab51963-1912-4cef-adad-eef34dbf75ad.png">

<img width="572" alt="Screen Shot 2022-01-02 at 00 38 24" src="https://user-images.githubusercontent.com/37787994/147869313-8112cfcf-b221-4837-a2a8-ef162cabbac1.png">


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
