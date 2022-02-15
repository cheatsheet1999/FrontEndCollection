```js
var SnakeGame = function(width, height, food) {
    let occupied = new Set()
    let snake = [[0,0]]
    occupied.add(`${snake[0]}`)
    
    this.move = (direction) => {
        let head = snake[0]
        let meal = food[0]
        
        switch(direction){
            case 'U': 
                snake.unshift([head[0]-1,head[1]])
                break
            case 'D': 
                snake.unshift([head[0]+1,head[1]])
                break
            case 'R': 
                snake.unshift([head[0],head[1]+1])
                break
            case 'L': 
                snake.unshift([head[0],head[1]-1])
                break
            default: break
        }
        
        head = snake[0]
        if(head[0] == height || head[0] < 0 ||
           head[1] == width || head[1] < 0) return -1
        
        if(food.length && head[0] == meal[0] && head[1] == meal[1]) food.shift()
        else occupied.delete(`${snake.pop()}`)
        
        if(occupied.has(`${head}`)) return -1
        
        occupied.add(`${head}`)
        
        return snake.length-1
    }
};
```
