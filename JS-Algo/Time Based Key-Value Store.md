#### Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.  

Implement the `TimeMap` class:
- TimeMap() Initializes the object of the data structure.
- void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
- `String get(String key, int timestamp)` Returns a value such that `set` was called previously, with `timestamp_prev <= timestamp`. If there are multiple such values, it returns the value associated with the largest `timestamp_prev`. If there are no values, it returns `""`.


<img width="538" alt="Screen Shot 2021-09-30 at 11 15 09 PM" src="https://user-images.githubusercontent.com/37787994/135574184-a24f1d24-ed4b-4667-96ab-878a4815620e.png">


```JS
  
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
 
 /*
 key[timestamp] = value;
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)) {
		   // key = foo, so set foo, and value []
        this.map.set(key, []);
    }
		let item = this.map.get(key);
    // get(key) will outputu foo, then here we set foo[1] = bar
    item[timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    // key = 'foo'
    if(!this.map.has(key)) return '';
    let item = this.map.get(key);
    //if foo[1] = '?'
    if(item[timestamp]) {
        // got value = 'bar'
        return item[timestamp];
    }
    while(timestamp > -1) {
        if(item[timestamp]) {
            return item[timestamp];
        }
        timestamp--;
    }
    return '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
```
