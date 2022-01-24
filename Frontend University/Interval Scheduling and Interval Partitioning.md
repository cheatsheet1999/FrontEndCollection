<img width="1127" alt="Screen Shot 2022-01-20 at 23 15 06" src="https://user-images.githubusercontent.com/37787994/150476017-f2bf2ef8-59ec-4a13-8283-10fcedee2bde.png">

**b -> e -> h** is optimal solution

<img width="1127" alt="Screen Shot 2022-01-20 at 23 16 52" src="https://user-images.githubusercontent.com/37787994/150476212-d8f92459-f98e-4fd6-ab20-3333805a5b64.png">


## Proof by contradiction (Greedy is optimal solution)
<img width="1127" alt="Screen Shot 2022-01-20 at 23 41 14" src="https://user-images.githubusercontent.com/37787994/150479165-7ef3d3a4-06d5-4371-aea4-24ef58c9a3d9.png">

- If we didn't pick ir + 1, but picked jr + 1,  it is only because the optimal solution is overlaping the greedy solution. Otherwise we can just take both to get more jobs done
- Even we replace jr + 1 with ir + 1 in the optimal solution, it is still the optimal, because the we arrange jobs based on their finish time, so no matter ir + 1 or jr + 1, it won't affect the total. For example, if I have 10 jobs before replacement, I still have 10 jobs after replacement

## Interval Partitioning
 <img width="1127" alt="Screen Shot 2022-01-23 at 18 48 11" src="https://user-images.githubusercontent.com/37787994/150709282-72a9fa52-8ac8-4571-8722-ee96d65bcde9.png">
<img width="1127" alt="Screen Shot 2022-01-23 at 18 49 07" src="https://user-images.githubusercontent.com/37787994/150709341-3dfc03e4-83ea-4296-a8cb-a1b82d68a504.png">
