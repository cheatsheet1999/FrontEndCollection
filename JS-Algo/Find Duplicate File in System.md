Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

A group of duplicate files consists of at least two files that have the same content.

<img width="486" alt="Screen Shot 2021-11-14 at 20 33 32" src="https://user-images.githubusercontent.com/37787994/141718206-4ccbde13-eae6-47f8-b075-39592d255007.png">
<img width="486" alt="Screen Shot 2021-11-14 at 20 33 53" src="https://user-images.githubusercontent.com/37787994/141718281-10770415-2ae9-4ebd-b452-05c394ce06a2.png">


```JS
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    // paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
    let group = {};
    for (let i=0;i<paths.length;i++) {
        // path = root/a            1.txt(abcd)          2.txt(efgh)
        let path = paths[i].split(" "); 
        for (let j=1;j<path.length;j++) {
            // temp = 1.txt           abcd
            let temp = path[j].split('('); 
            // if current content is null, creat a [];
            if (group[temp[1]] == null) group[temp[1]] = [];
            //abcd: [root/a/1.txt]
            group[temp[1]].push(path[0] + '/' + temp[0]); 
        }
    }
    // remove [] in group
    return [...Object.values(group)].filter((val)=>val.length>1); 
};
```
