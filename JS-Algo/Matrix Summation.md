<img width="1002" alt="Screen Shot 2021-10-28 at 12 38 47 AM" src="https://user-images.githubusercontent.com/37787994/139214186-bfb14159-d59e-4282-bfb3-084b41c8b58b.png">
<img width="995" alt="Screen Shot 2021-10-28 at 12 38 54 AM" src="https://user-images.githubusercontent.com/37787994/139214210-c8ccc382-fd7a-4c9a-98a1-82bc39280642.png">

```JS
public static void beforeMatrix(int[][] afterMatrix) {
		int m=afterMatrix.length;
		int n=afterMatrix[0].length;
		
		for(int i=m-1;i>=0;i--) {
			for(int j=n-1;j>=0;j--) {
				
				int left = j==0 ? 0 : afterMatrix[i][j-1];
				int up = i==0 ? 0 : afterMatrix[i-1][j];
				int corner = i==0 || j==0 ? 0 : afterMatrix[i-1][j-1];
				
					afterMatrix[i][j]-=left+up-corner;
				}			
		}		
	}
```


```JS
function beforeMatrix(afterMatrix) {
    let m = afterMatrix.length;
    let n = afterMatrix[0].length;

    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            let left = j ===0 ? 0 : afterMatrix[i][j-1];
            let up = i===0 ? 0 : afterMatrix[i-1][j];
            let corner = i===0 || j === 0 ? 0 : afterMatrix[i-1][j-1];
            afterMatrix[i][j] -= left + up - corner;
        }
    }
    return afterMatrix;
}

console.log(beforeMatrix([[1,2],[3,4]]));

```	
