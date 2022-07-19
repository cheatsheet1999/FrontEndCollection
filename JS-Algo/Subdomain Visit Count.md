### A website domain *"discuss.leetcode.com"* consists of various subdomains. At the top level, we have *"com"*, at the next level, we have *"leetcode.com"* and at the lowest level, *"discuss.leetcode.com".* When we visit a domain like *"discuss.leetcode.com"*, we will also visit the parent domains "leetcode.com" and "com" implicitly.

<img width="640" alt="Screen Shot 2021-09-17 at 6 55 06 PM" src="https://user-images.githubusercontent.com/37787994/133868454-d88ba542-2728-4c1b-9710-4ba6d854841a.png">


```Javascript
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

/*
visitCounts  = {
'google.mail.com': '900',
'yahoo.com' : 50,
'intel.mail.com' : 1
}

so, visitCounts.key is google.mail.com, yahoo.com... value is 900, 50 .....

Object is not Array, they work in a totally different way. 
visitCount[subdomain] means to add subdomain in visitCount object

*/


var subdomainVisits = function(cpdomains) {
//1st. create an empty object
    let visitCount = {};
    //2nd, traverse the given array, and split number of visit and domain, then storing them.
    for(let i = 0; i < cpdomains.length; i++) {
        let [visit, domains] = cpdomains[i].split(" ");
        //3rd, we further split subdomain with '.', since a large domain contains several subdomains
        let subdomains = domains.split('.');
        while(subdomains.length) {
        //4th, we need to check if there are still subdomains, since we are gonna shift them at the end
        //join subdomains with '.' because we need to try different combinations
            let subdomain = subdomains.join('.');
            //add subdomain to visitCount object, if there is already a subdomain in there (such as 'com'),
            //we just go ahead and add its visitCount. if this is a new subdomain, we add 'visit' as its value
            visitCount[subdomain] = visitCount.hasOwnProperty(subdomain) ?
                +(visitCount[subdomain]) + +(visit) : visit; //+ means Number, otherwise '1' + '0' will become '10' instead of '1'
            subdomains.shift();
        }
    }
    // visitCount[key] is the value (number), key is the one on the front, which is subdomains.
    return Object.keys(visitCount).map((key) => `${visitCount[key]} ${key}`);
}
```

## Updated
```js
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map();
    for(let i = 0; i < cpdomains.length; i++) {
        let [visits, domain] = cpdomains[i].split(" ");
        let subdomains = domain.split(".");
        for(let j = 0; j < subdomains.length; j++) {
            let subdomain = subdomains.slice(j).join(".");
            map[subdomain] ? map[subdomain] += +visits : map[subdomain] = +visits;
        }
    }
    return Object.keys(map).map(key => `${map[key]} ${key}`)
};
```
