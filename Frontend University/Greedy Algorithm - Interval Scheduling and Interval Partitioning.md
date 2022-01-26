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

<img width="1127" alt="Screen Shot 2022-01-23 at 19 16 11" src="https://user-images.githubusercontent.com/37787994/150711467-79da6e6e-35e1-4293-882b-60ed7ecdded6.png">

## Scheduling to Minimize Lateness
<img width="1127" alt="Screen Shot 2022-01-23 at 22 26 13" src="https://user-images.githubusercontent.com/37787994/150726839-868d92be-51ec-4e1a-986e-214139277d52.png">

**Earliest deadline first is the optimal solution**
<img width="1127" alt="Screen Shot 2022-01-23 at 22 26 48" src="https://user-images.githubusercontent.com/37787994/150726893-2568aa3e-1109-4317-a81a-e0f5ab30aa55.png">
**The greedy algorithm has no idle time**
<img width="1127" alt="Screen Shot 2022-01-23 at 22 31 00" src="https://user-images.githubusercontent.com/37787994/150727252-e747ad9f-5277-4357-8a53-1f74e24c0f72.png">

<img width="1127" alt="Screen Shot 2022-01-23 at 22 44 11" src="https://user-images.githubusercontent.com/37787994/150728422-884cd144-9923-4dfa-acab-27c5b64a6b1c.png">

<img width="1127" alt="Screen Shot 2022-01-23 at 22 52 09" src="https://user-images.githubusercontent.com/37787994/150729110-ae2337cd-c2a7-49d9-82aa-650fa09c82c5.png">

## Optimal Offline Caching
<img width="1127" alt="Screen Shot 2022-01-26 at 12 53 11" src="https://user-images.githubusercontent.com/37787994/151236681-ac03b420-5ab8-4576-9387-6295ee0e900a.png">

<img width="1127" alt="Screen Shot 2022-01-26 at 13 01 36" src="https://user-images.githubusercontent.com/37787994/151237989-e5905c5f-4dd3-4aa8-a8b5-fe111324a6dc.png">

<img width="1127" alt="Screen Shot 2022-01-26 at 15 35 38" src="https://user-images.githubusercontent.com/37787994/151258572-a41d1bfa-e9bc-4805-886a-328d669c0928.png">

## OPTIMAL CACHING – FARTHEST-IN-
<img width="1127" alt="Screen Shot 2022-01-26 at 16 56 30" src="https://user-images.githubusercontent.com/37787994/151266697-90f81b4d-de84-485f-990d-72624dbdd9a5.png">
<img width="1127" alt="Screen Shot 2022-01-26 at 16 56 47" src="https://user-images.githubusercontent.com/37787994/151266719-42362d8b-6a62-4fc3-9d7d-c1ba0cb4f611.png">
<img width="1127" alt="Screen Shot 2022-01-26 at 16 57 21" src="https://user-images.githubusercontent.com/37787994/151266754-963dd40e-6880-4e60-b76b-f13d9fc8402c.png">
<img width="1127" alt="Screen Shot 2022-01-26 at 16 57 40" src="https://user-images.githubusercontent.com/37787994/151266783-ebf1f5e1-f4ba-4b82-9803-57ee51eb8e83.png">









