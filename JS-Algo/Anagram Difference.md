<img width="927" alt="Screen Shot 2021-12-17 at 15 02 31" src="https://user-images.githubusercontent.com/37787994/146613120-57cc32db-f9d3-48fa-a476-d14d974bd188.png">

<img width="919" alt="Screen Shot 2021-12-17 at 15 02 37" src="https://user-images.githubusercontent.com/37787994/146613166-2bdbf237-6371-43f2-ae3e-3f89076a9feb.png">

<img width="916" alt="Screen Shot 2021-12-17 at 15 02 43" src="https://user-images.githubusercontent.com/37787994/146613177-3b24827e-b037-4242-9748-9888fbb7a661.png">





```java
/*
    Time Complexity : O(N)
    Space Complexity : O(1)

    Where 'N' is the length of the given string.
*/

public class Solution {
	public static int getMinimumAnagramDifference(String str1, String str2) {
		int n = str1.length();

		// Array for storing frequencies.
		int freq[] = new int[26];

		// Store the frequencies of characters of first string.
		for (int i = 0; i < n; i++) {
			freq[str1.charAt(i) - 'a']++;
           		freq[str2.charAt(i) - 'a']--;
		}


	
		// Variable to store the total absolute frequencies difference.
		int freqDiff = 0;

		// Iterating for all alphabets to cacluclate the total absolute frequencies difference.
		for (int i = 0; i < 26; i++) {
            		if(freq[i] > 0) {
                	freqDiff += freq[i];
            	     }	
		}

		// Return minimum manipulations required to make string anagram.
		return freqDiff;
	}
}
```
