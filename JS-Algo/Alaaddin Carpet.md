
<img width="730" alt="Screen Shot 2021-12-17 at 15 28 14" src="https://user-images.githubusercontent.com/37787994/146615258-5e908e37-b3c3-42de-a882-f1a00c5dffaf.png">

<img width="762" alt="Screen Shot 2021-12-17 at 15 28 20" src="https://user-images.githubusercontent.com/37787994/146615263-94a3f2b4-0572-48c0-822e-1f16426533ab.png">

<img width="886" alt="Screen Shot 2021-12-17 at 15 28 29" src="https://user-images.githubusercontent.com/37787994/146615271-490630cd-134b-4ea1-bbe0-895fbdf3bdb9.png">

<img width="731" alt="Screen Shot 2021-12-17 at 15 28 34" src="https://user-images.githubusercontent.com/37787994/146615276-fa3213f1-1c26-4958-897d-370d75644580.png">


```java
 private static int optimalPoint(int[] magic, int[] dist) {
        int startIndex = 0;
        int remainingMagic = 0;
        int usedMagic = 0;
        int length = magic.length;
        
        for (int i = 0; i < length; i++) {
            remainingMagic += magic[i] - dist[i];
            if (remainingMagic < 0) {
                startIndex = i + 1;
                usedMagic += remainingMagic;
                remainingMagic = 0;
            }
        }
        return usedMagic + remainingMagic >= 0 ? startIndex : -1;
    }
```
