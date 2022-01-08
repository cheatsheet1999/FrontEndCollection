**Node.js is using JavaScript, and JS is a single-thread language, how node.js handle multiple tasks?**

## Event Loop
**Event loop will be started as long as we start to program. It handles event callbacks in order, and loop them through**   
1. At the beginning of each iteration, it checks if there are any timer callbacks it should executed (setTimeout, setInterval)  
2. It checkes I/O (Disk & Network operations) related Callbacks that were deferred
3. Go into Poll phase
4. Check Phase
5. Close Callbacks: If we had any close events, this would be the point of time where node.js executes their callbacks


Internally, node.js track of its open event listeners, and basically has a counter **refs**, which increments by 1 for every new callback that is registered, and reduce the counter by 1 for every event listenr that it doesn't need anymore.

<img width="944" alt="Screen Shot 2022-01-07 at 22 39 48" src="https://user-images.githubusercontent.com/37787994/148633036-dfa29cd9-cc95-4ba6-9d57-2e24adb28c71.png">
