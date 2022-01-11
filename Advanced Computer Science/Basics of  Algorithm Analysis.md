## Polynomial-Time

**Brute force**  
For many non-trivial problems, there is a natural brute force search algorithm that checks every possible solution.
-  Typically takes 2N time or worse for inputs of size N.
- Unacceptable in practice.

**Desirable scaling property**  
When the input size doubles, the algorithm should only slow down by some constant factor C. 


<img width="675" alt="Screen Shot 2022-01-10 at 21 13 47" src="https://user-images.githubusercontent.com/37787994/148880012-ae183724-94d2-4cb0-af3c-2d8b0dde998d.png">

- An algorithm is poly-time if the above scaling property holds. choose **C = 2^d**  

## Worst-Case Analysis
### Worst case running time.  Obtain bound on largest possible running time of algorithm on input of a given size N.
- Generally captures efficiency in practice.
- Draconian view, but hard to find effective alternative. 

### Average case running time. Obtain bound on running time of algorithm on **random** input as a function of input size N.
- Hard (or impossible) to accurately model real instances by random distributions.
- Algorithm tuned for a certain distribution may perform poorly on other inputs.

### Worst-Case Polynomial-Time  
#### An algorithm is **_efficient_** if its running time is polynomial.
- Although 6.02 * 10^23 * N^20 is technically poly-time, it would be useless in practice.
- In practice, the poly-time algorithms that people develop almost always **have low constants and low exponents.**

## Asymptotic Order of Growth
<img width="1003" alt="Screen Shot 2022-01-10 at 21 25 47" src="https://user-images.githubusercontent.com/37787994/148880963-cfea9c71-45e6-4e18-81ec-7a2c452a166c.png">
<img width="906" alt="Screen Shot 2022-01-10 at 21 26 53" src="https://user-images.githubusercontent.com/37787994/148881064-0464744c-83bb-4883-9eba-9160f54e70d4.png">

