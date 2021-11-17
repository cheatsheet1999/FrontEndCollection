Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

<img width="466" alt="Screen Shot 2021-11-16 at 18 11 04" src="https://user-images.githubusercontent.com/37787994/142091061-5f0700e0-6366-42af-a235-ba01abf3676c.png">
<img width="488" alt="Screen Shot 2021-11-16 at 18 11 26" src="https://user-images.githubusercontent.com/37787994/142091096-645ac8a5-fbf9-4d61-868b-1398879ad296.png">

<img width="433" alt="Screen Shot 2021-11-16 at 18 11 57" src="https://user-images.githubusercontent.com/37787994/142091150-7c24a1bf-b626-4e25-8bcc-ad7568eb07d2.png">

<img width="435" alt="Screen Shot 2021-11-16 at 18 12 11" src="https://user-images.githubusercontent.com/37787994/142091171-ab0d44f0-21b1-4ca9-8704-2447fb522a40.png">


```jS
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

var accountsMerge = function(accounts) {  
    
    let graph = {};
    let nameDict = {};
    
    for (let acc of accounts) {
        let name = acc[0];
        nameDict[acc[1]] = name;
        for (let i=1;i<acc.length;i++) {
            if (!graph[acc[i]]) graph[acc[i]] = new Set();
            nameDict[acc[i]] = name;
            if (i != 1) {
                graph[acc[1]].add(acc[i]);
                graph[acc[i]].add(acc[1]);
            }
        }
    }
    
    let res = [];
    let visited = new Set();
    
    let dfs = function (key) {
        visited.add(key);
        let emails = [key];
        graph[key].forEach((e)=>{
            if (!visited.has(e)) {
                emails.push(...dfs(e));
            }
        })
            
        return emails;
    }
    
    for (let key in graph) {
        if (!visited.has(key)) {
            let temp = dfs(key);
            temp.sort();
            temp.unshift(nameDict[temp[0]]);
            res.push(temp);
        }
    }
    
    return res;
};
```
