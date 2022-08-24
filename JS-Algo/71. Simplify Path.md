#### Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

#### In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

#### The canonical path should have the following format:

- The path starts with a single slash '/'.
- Any two directories are separated by a single slash '/'.
- The path does not end with a trailing '/'.
- The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
- Return the simplified canonical path.



 <img width="477" alt="Screen Shot 2021-11-09 at 22 18 17" src="https://user-images.githubusercontent.com/37787994/141054383-143f100b-8f65-42ac-878a-e30589bb4564.png">
<img width="477" alt="Screen Shot 2021-11-09 at 22 18 30" src="https://user-images.githubusercontent.com/37787994/141054401-3b73159d-23a7-4d6f-a89c-facfbc393d44.png">



```JS
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    path = path.split('/');
    
    for(let i = 0; i < path.length; i++) {
        if(path[i] === '.' || path[i] === '') continue;
        if(path[i] === '..') stack.pop();
        else stack.push(path[i]);
    }
    // add a '/' between each stack block
    // stack [home -> foo]  home/foo
    return '/' + stack.join('/')
};
```
