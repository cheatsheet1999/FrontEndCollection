#### On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:
- "G": go straight 1 unit;
- "L": turn 90 degrees to the left;
- "R": turn 90 degrees to the right.

#### The robot performs the _instructions_ given in order, and repeats them forever.
#### Return *true* if and only if there exists a circle in the plane such that the robot never leaves the circle.

<img width="441" alt="Screen Shot 2021-10-20 at 6 08 13 PM" src="https://user-images.githubusercontent.com/37787994/138193204-9be37c9b-0cb1-4874-912a-ee6e620bcfdd.png">

```JS
/**
 * @param {string} instructions
 * @return {boolean}
 */

 // T.C: O(N)
 // S.C: O(1)
var isRobotBounded = function(instructions) { 
    let x = 0, y = 0;
    // Up(north), right, down(south), left
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    // by default, a robot is facing north
    let i = 0;
    for(let j = 0; j < instructions.length; j++) {
         // if you turn, then the "new" left and right is based on below formula
        if(instructions[j] === 'R')  i = (i + 1) % 4;
        else if(instructions[j] === 'L') i = (i + 3) % 4;
        else {
            // if G, follows the direction and move
            x += dirs[i][0];
            y += dirs[i][1];
        }
    }
        // if i > 0, eventually will go back to the original point
    return (x === 0 && y === 0) || i > 0;
};
```
