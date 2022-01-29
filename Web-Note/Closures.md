<img width="1000" alt="Screen Shot 2022-01-29 at 12 54 20" src="https://user-images.githubusercontent.com/37787994/151675604-19cdd410-2e6b-4b2f-9a50-da691db22e8e.png">

### The closure is a function that accesses its lexical scope even executed outside of its lexical scope

Simpler, the closure is a function that remembers the variables from the place where it is defined, regardless of where it is executed later.

A rule of thumb to identify a closure: if inside a function you see an alien variable (not defined inside that function), most likely that function is a closure because the alien variable is captured.
