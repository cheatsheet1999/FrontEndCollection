<img width="520" alt="Screen Shot 2022-03-08 at 18 45 31" src="https://user-images.githubusercontent.com/37787994/157356147-149dbcaf-5084-4f59-83aa-9d9c9124f7e0.png">
<img width="520" alt="Screen Shot 2022-03-08 at 18 45 42" src="https://user-images.githubusercontent.com/37787994/157356150-682279a5-5e8b-4474-a57a-48c6c28db7e0.png">

```js
function countDuplicate(numbers) {
    // Write your code here
    let counts = {};
    let counter = 0;
    numbers.forEach(function(x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    
    for(let key in counts) {
        if(counts[key] !== 1) {
            counter++;
        }
    }
    
    return counter;
    
}

```
