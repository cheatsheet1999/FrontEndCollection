## 1. What is React?
1. React is a JavaScript library for building user interfaces.
2. Features are Virtual DOM, JSX, Unidirectional Data Flow, and Server-Side Rendering. 

## 2. What is JSX?
1. JSX is a Javascript syntax extension that allows us to write HTML in our JavaScript to create React Elements.
2. Babel compiles JSX into React.createElement() calls

## 3. What is Virtual Dom?
- React makes a virtual representation of the actual DOM in memory because manipulating the actual DOM is expensive in terms of performance. So, the updated virtual DOM is compared with its previous version using React’s ‘diffing’ algorithm to determine how to best update the real DOM when we made changes to the code.

## 4. What is a Component in React and what are the two main ways to define them?
1. Each component is an independent reusable piece of the UI.
2. Class Component: Component implemented using ES6 Classes extending React.Component
3. Function Component: Component implemented by a JS function that takes a props argument and returns a React element

## 5. What are props and state in React?
1. props is the JavaScript object, passed into a Component, that holds the configuration properties
2. props is immutable by the receiving Component
3. state is the JavaScript object, managed within the Component, that holds its internal state.

## 6. The differnece between React.Fragment and div
- The main difference between React.Fragment vs div is that using a React.Fragment will not add any additional elements into the DOM tree, whereas, using a div will add a div to the DOM tree.

### With div
```jsx
export default function App() {
  return (
    <div>
      <p>Hello</p>
      <p>World</p>
    </div>
  );
}
```

```html
<div>
  <p>Hello</p>
  <p>World</p>
</div>
```

### With React.Fragment
```jsx
export default function App() {
  return (
    <React.Fragment>
      <p>Hello</p>
      <p>World</p>
    </React.Fragment>
  );
}
```
```html
<p>Hello</p>
<p>World</p>
```

## 7. Walk me through the main phases of the React Lifecycle.
1. 3 phases: Mounting, Updating, Unmounting.
-	Mounting: constructor → render → DOM update → componentDidMount
-	Updating: render → DOM update → componentDidUpdate
-	Unmounting: componentWillUnmount

## 8. How can I prevent unnecessary re-rendering?
1. React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.
2. React.Memo: Higher-order component that works like React.PureComponent but used for function components

## 9. What is useRef hooks?
- useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current

## 10. When rendering lists, what are keys and why do you need them?
1. Keys are constant strings values that uniquely identifies a list item among its siblings
2. Keys help React identify which items have changed, are added, or are removed.
3. Keys are necessary because reconciling list elements differences without them is highly inefficient

## 11. What are Controlled and Uncontrolled components in React?
1. Both are ways to implement form controls in React
2. Controlled: form data is handled by a React component
3. Uncontrolled: form data is handled by the DOM itself
4. Controlled components are the recommended way to implement forms

Controlled component
```jsx
import React, { useState } from "react";
import "./styles.css";

function MyControlledInput() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div>Input value: {value}</div>
      <input placeholder="Type a value" value={value} onChange={onChange} />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h2>Controlled Component Demo</h2>
      <MyControlledInput />
    </div>
  );
}

```

