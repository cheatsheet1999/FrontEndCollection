```Javascript

/**
 * @param { Function } func
 */
function curry(func) {
  
  return function curried(...args) {   // we need to return a function to make it curry-able.
    
    // 1. If the arguments are extra then eliminate them
    // we don't want to pass 6 arguments when the expected is 3.
    // it will interfere with our placeholder logic
    const sanitizedArgs = args.slice(0, func.length);
    
    // see if placeholder is available in arguments
    const hasPlaceholder = sanitizedArgs.some(arg => arg == curry.placeholder);

    // if no placeholder and arguements are equal to what expected then it is normal function call
    if(!hasPlaceholder && sanitizedArgs.length == func.length) {
      return func.apply(this, sanitizedArgs);
    }
    
    // else we need to replace placeholders with actual values
    // we call helper function `mergeArgs` for this
    // we pass first and next arguments to helper function
    return function next(...nextArgs) {
      return curried.apply(this, mergeArgs(sanitizedArgs, nextArgs));
    }
    
  } 
}

function mergeArgs(args, nextArgs) {

  let result = [];

  // iterate over args (because we need to replace from it) 
  // in each iteration, if we find element == curry.placeholder
  // then we replace that placeholder with first element from nextArgs
  // else we put current element
  args.forEach((arg, idx) => {
    if(arg == curry.placeholder) {
      result.push(nextArgs.shift());
    } else {
      result.push(arg);
    }
  });

  // we merge both, because there might be chance that args < nextArgs
  return [...result, ...nextArgs];
}

curry.placeholder = Symbol()
```
