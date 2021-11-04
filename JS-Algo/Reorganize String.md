#### Given a string `s`, rearrange the characters of `s` so that any two adjacent characters are not the same.

#### Return any possible rearrangement of `s` or return "" if not possible.

 <img width="431" alt="Screen Shot 2021-11-04 at 12 14 48 AM" src="https://user-images.githubusercontent.com/37787994/140272458-3ef81f4e-fae1-4d65-9494-e2ddb8ca1036.png">


```JS
var reorganizeString = function(s) {
    const map = new Map();
	// 1. building map
    s.split('').forEach((letter)=>{
        map.set(letter,map.get(letter)+1||1);
    })
	
	// 1. sorting the map based on the occurances in descending order.
    const sortedMap = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));
    
	// 2. getting the first value of sorted map and checking if greater than half of string length
    if(sortedMap.values().next().value > (s.length+1)/2) return "";
    
    const res=[];
    let index=0;
    
    for(let [key,value] of sortedMap){
        while(value--){
			// 5. if it reaches the end of string, start filling from odd position.
            if(index>=s.length) index=1;
			// 4. adding elements at even position.
            res[index]=key
            index+=2
        }
    }
	// converting array back to string
    return res.join('');
};
```
