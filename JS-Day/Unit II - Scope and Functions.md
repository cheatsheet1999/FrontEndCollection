JS is the only language that supports 3 paradigms
  - functional
  - object-oriented
  - async

a place for variable becomes valid
memory is relased outside of the variable 

### Four types of scoping
- global scope 
  - valid inside the whole file, intialize a variable outside every function 
- Function Scope (ES5)
- Block Scope
- Module Scope

var is a function scope, and let is block scope


cost o = {name: 'john', age = 20}
o = {name: 'john1', age = 22} 
can't change because the "house is kept"

strict mode
- use variable before declaring
- using an object without declaring
- refered to w3cschool

### Deep and shallow copy

<img width="917" alt="Screen Shot 2022-03-09 at 16 41 11" src="https://user-images.githubusercontent.com/37787994/157557889-b96c8311-b462-415b-aa48-2d14c445a59d.png">

Deep copy: value is the same, but two memory blocks, simple type always deep copy

Shallow copy, only copy the refereence
