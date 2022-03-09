<img width="520" alt="Screen Shot 2022-03-08 at 18 27 37" src="https://user-images.githubusercontent.com/37787994/157354510-9d80a1d3-8d79-42f7-9f8c-6fe515dbbd80.png">
<img width="520" alt="Screen Shot 2022-03-08 at 18 27 44" src="https://user-images.githubusercontent.com/37787994/157354507-fc39ae91-4e88-4545-8069-db2175df5c90.png">
<img width="520" alt="Screen Shot 2022-03-08 at 18 27 52" src="https://user-images.githubusercontent.com/37787994/157354504-027dda16-2383-4730-b6e5-18ec9fc6caf6.png">
<img width="520" alt="Screen Shot 2022-03-08 at 18 27 58" src="https://user-images.githubusercontent.com/37787994/157354501-46fb4a2d-f7ae-4189-8b8a-a775184146d0.png">






```js

function waitingTime(tickets, p) {
    // Write your code here
    let totalTime = 0;
    for(const [pos, ticket] of tickets.entries()) {
        totalTime += Math.min(ticket, tickets[p] - (pos > p));
    }
        
    return totalTime;
}


```
