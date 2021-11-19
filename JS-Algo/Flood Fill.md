An image is represented by an m x n integer grid image where `image[i][j]` represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

<img width="477" alt="Screen Shot 2021-11-18 at 18 13 41" src="https://user-images.githubusercontent.com/37787994/142526721-d07cbcfa-0bd7-4caa-b193-628678c3ebbe.png">

<img width="477" alt="Screen Shot 2021-11-18 at 18 13 53" src="https://user-images.githubusercontent.com/37787994/142526857-38f469e0-24c3-467b-adf0-256d117f412f.png">

#### DFS
#### Time Complexity. O(N) 
#### Space Complexity. O(N)

```JS
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, firstColor = image[sr][sc]) {
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor 
    || image[sr][sc] === newColor) {
        return image;
    }
    image[sr][sc] = newColor;
    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);
    
    return image
};
```
