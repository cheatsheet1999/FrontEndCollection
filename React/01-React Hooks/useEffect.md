
### 1
**The Effect Hook lets us perform _side effects_ in functional components, it is a close replacement for componentDidMount, componentsDidUpdate and componentsWillUnmount**


### 2
**UseEffect is called after every single render of the component.**  
**When we specify useEffect, we are basically requesting React to execute the function that is passed as an argument every time the component renders.**

### 3
**useEffect is placed inside the component, by doing this, we can easily access the components' state and props without having to write any addtional code.**

```js
import "./styles.css";
import HookCounterOne from "./components/HookCounterOne";

export default function App() {
  return (
    <div className="App">
      <HookCounterOne />
    </div>
  );
}

```

```js
import React, { useEffect, useState } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounterOne;

```


## Avoid performance problem
### conditionally run an effect from a function component



```js
import "./styles.css";
import HookCounterOne from "./components/HookCounterOne";

export default function App() {
  return (
    <div className="App">
      <HookCounterOne />
    </div>
  );
}

```

console.log("useEffect - updating doc title"); will render multiple every time when type in the input box without second parameter to limit it.

```js
import React, { useEffect, useState } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating doc title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounterOne;
```
**The second parameter is the array of values that the effect depends on**, if the values don't change bewteen renders, the effect simply not run
