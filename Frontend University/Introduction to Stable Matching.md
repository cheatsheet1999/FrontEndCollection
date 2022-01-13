## Stable Matching Problem
<img width="1045" alt="Screen Shot 2022-01-11 at 23 25 34" src="https://user-images.githubusercontent.com/37787994/149075252-745ee79f-6665-41e2-8f02-0a353ab80172.png">
<img width="1045" alt="Screen Shot 2022-01-11 at 23 26 40" src="https://user-images.githubusercontent.com/37787994/149075379-22513cb0-c07e-4108-aee4-4f08d1997f66.png">
<img width="1045" alt="Screen Shot 2022-01-11 at 23 29 10" src="https://user-images.githubusercontent.com/37787994/149075660-35cefbdd-0ca0-4b74-bbdd-90c04d1de6e2.png">

**No, Bertha and Xaview will hook up, because Xavier is the 1st priority of Bertha, and Xavier rather to date with Bertha instead of Clare, and leave Clare and Yancey unmatched**   


## Example 
<img width="1045" alt="Screen Shot 2022-01-11 at 23 48 01" src="https://user-images.githubusercontent.com/37787994/149077859-d38600c8-0d3e-4325-a2a3-345ec5ce241a.png">

**1st round: Victor propose Bertha, Bertha accepets his propose since no one else propose her  
2nd round: Wyatt propose Diane, Diane has no choice but accept his propose since no one else propose her  
3rd round: Xavier propose Bertha, they are the top prortiy for each of them, sadly, Bertha dumped Victor for Xavier**
<img width="1045" alt="Screen Shot 2022-01-11 at 23 50 43" src="https://user-images.githubusercontent.com/37787994/149078175-598dc277-b85d-451c-9403-9e99b374998b.png">
**4th round: Then, Victor is back to propose Amy, Victor is not the top guy for Amy, but Amy think it is good enough**  
**5th round, Yancey propose Amy, but didn't success, so he proposed Diane, Diane accepts Yancey and dumps Wyatt**  
<img width="1045" alt="Screen Shot 2022-01-11 at 23 54 13" src="https://user-images.githubusercontent.com/37787994/149078604-3e422671-65a3-417d-9aff-35e75f028361.png">
**6th round: Wyatt got rejected by a lot people, until found Clare, and Clare acceptes his propose**    
**7th round: Yancey got rejected by everyone, propose to his least favorite one, and Erika acceptes**    
<img width="1045" alt="Screen Shot 2022-01-12 at 00 04 58" src="https://user-images.githubusercontent.com/37787994/149079972-12cc177e-69de-4f53-919b-a7b0b0032507.png">

**We have a stable matching here. Although Amy likes Zeus more, Zeus likes his matched one more than Amy. Same for Diane, she likes Victor more, but Victor likes his matched one more than Dianee. Turns out, there is no way to unstablize the match**  

**Running Time is O(n^2)**
### We will always get stable matching by using the above algorithm
<img width="1045" alt="Screen Shot 2022-01-12 at 00 10 56" src="https://user-images.githubusercontent.com/37787994/149080607-449ad5e4-b75a-414b-9147-4e735903d2e7.png">
<img width="1045" alt="Screen Shot 2022-01-12 at 00 17 53" src="https://user-images.githubusercontent.com/37787994/149081482-abc1d669-0d6c-4ba4-aaa7-b365648f1482.png">

## More than 1 stable matching could occur
<img width="1045" alt="Screen Shot 2022-01-12 at 20 40 19" src="https://user-images.githubusercontent.com/37787994/149261814-268ba9dd-831b-475a-a332-f48ca04f9291.png">

## Man-optimal Assignment
Proof:   
- Suppose: A man match a women, the women is not the favorite match
- Man propose descendingly based on their favorite
  - Which means some guy will be dumped in GS algorithm
- Yancey is the man, and Amy is the women who rejected him
- A-Y is stable matching
- When Amy reject Yancey, Amy match with Zeus
  - So, Amy likes Zeus more than Yancey
- Assume Zeus matched Bertha
- When Amy reject Yancey, Zeus is not rejected by any women, (because we assume Yance -> Amy is the first dumped relationship)   
- We know Amy and Zeus are matched
- If Zeus already proposed Bertha before propose to Amy, then that means Zeus has already be rejected by Bertha, but it contradicts to above...
- Thus, before Zeus propose to Amy, he hasn't propose Bertha
  - which means Zeus likes Amy more than Bertha
- Amy-Zeus is unstable, because Amy is the top one for Zeus  

