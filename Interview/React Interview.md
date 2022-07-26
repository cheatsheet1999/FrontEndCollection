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
## 12. What is props.children?
1. The content between the opening and closing tags of a component is passed as the children attribute of props: props.children
2. props.children can be string literals, HTML syntax, JS expressions, and JS functions

## 13. Talk to me about handling events in React.  
1. React events are named using camelCase, rather than lowercase.
2. With JSX you pass a function as the event handler, rather than a string.

## 14. What are the common approaches to reusing code in React
### Higher-Order Component
-	Higher-order component: A function that takes a React component and transforms it into another component by enriching it with reusable functionality
-	Common in third-party libraries, a prevalent example is React Redux’s connect
-	Easily compose a component by chaining multiple HoC’s
-	Disadvantage: Poor readability when chaining many HoC’s resulting in Wrapper Hell
-	Disadvantage: Wrapper hell can result in a nested tree and difficulty debugging

### Render Props
-	Render Props: A pattern where a component uses a prop (a function) that dictates its render logic rather than implementing its own.
-	Prevalent example is React-Router
-	Disadvantage: Can potentially be verbose as render logic needs to be passed into JSX
-	Disadvantage: Incorrect implementation can lead to memory issues

### Custom Hooks
-	In most cases, custom hooks are sufficient in replacing render props and HoCs and reduce the amount of nesting needed
-	A custom hook is a Javascript function whose name starts with ‘use’ and calls other hooks
-	Part of React 16.8 hook update, and allows you to reuse stateful logic without restructuring your component hierarchy
-	Allow you to avoid wrapper hell/multiple layers of abstraction that can come with Render Props and HoCs
-	Disadvantage: Hooks cannot be used inside classes. 


## 15. What are React Hooks?
-	New feature in React 16.8, allows function components to use state and other previous class-only features and	backwards compatible.
- Hooks allow for simply reuse of stateful logic without layering abstractions like HoCs and Render Props.
-	Hooks allow us to avoid Class components which introduce unnecessary complications.

## 16. What is useState?
- useState is a Hook that allows us to have state variables in functional components
- we  pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value

## 17. What is the useEffect hook
- The useEffect Hook allows us to perform side effects in our components.
- useEffect is triggered after a render.
- useEffect is like the combination of componentDidMount, componentDidUpdate and componentWillUnmount.
- useEffect accepts two arguments. The first one is function to be called and the second argument is optional, but it is an array for React to check for changes in order to render.

## 18. 
-	useReducer is an alternative to useState that is used when there is complex state logic that that involves multiple sub-values or when the next state depends on the previous one.
-	3 Arguments: Reducer function, initial State Object, and a function to initialize the state.
-	Reducer function takes the current state and action variable and returns the next state.
-	Returns: a pair containing the current state, and a dispatch function for dispatching an action.
-	Works similarly to Redux.



