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
<img width="965" alt="Screen Shot 2022-01-10 at 21 25 47" src="https://user-images.githubusercontent.com/37787994/148880963-cfea9c71-45e6-4e18-81ec-7a2c452a166c.png">
<img width="965" alt="Screen Shot 2022-01-10 at 21 26 53" src="https://user-images.githubusercontent.com/37787994/148881064-0464744c-83bb-4883-9eba-9160f54e70d4.png">

## Big O complexity chart
![image](https://user-images.githubusercontent.com/37787994/148881194-f39a8b62-eabd-426e-8730-123b882eaa52.png)

## A Survey of Common Running Times

### Linear Time:  O(n)

**Linear time.  Running time is at most a constant factor times the size of the input**  
<img width="965" alt="Screen Shot 2022-01-10 at 21 46 54" src="https://user-images.githubusercontent.com/37787994/148882803-802f7540-399d-491c-b07d-dfff73ca475a.png">

<img width="965" alt="Screen Shot 2022-01-10 at 22 06 28" src="https://user-images.githubusercontent.com/37787994/148884546-06409246-5a61-40ba-9372-5701827a50de.png">


### O(n log n) Time
<img width="965" alt="Screen Shot 2022-01-10 at 22 07 57" src="https://user-images.githubusercontent.com/37787994/148884686-366f23f9-0147-4d30-905f-db345a0f053e.png">

### Quadratic Time:  O(n2)
<img width="965" alt="Screen Shot 2022-01-10 at 22 08 24" src="https://user-images.githubusercontent.com/37787994/148884728-185bbd19-06dc-48d8-82cb-2d70d910bb4c.png">

### Cubic Time:  O(n3)
<img width="965" alt="Screen Shot 2022-01-10 at 22 09 03" src="https://user-images.githubusercontent.com/37787994/148884762-d457b1c9-1a4a-4252-aed5-e9ea2e260cf5.png">

### Polynomial Time:  O(nk) Time
<img width="965" alt="Screen Shot 2022-01-10 at 22 09 35" src="https://user-images.githubusercontent.com/37787994/148884820-79e58eb1-6139-417f-bb12-40fef447f1f0.png">

### Exponential Time
<img width="965" alt="Screen Shot 2022-01-10 at 22 10 04" src="https://user-images.githubusercontent.com/37787994/148884864-b7ee1578-08ec-4ee2-86a3-a695d63ca1ef.png">











