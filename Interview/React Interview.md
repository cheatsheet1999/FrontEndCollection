## 1. What is React?
1. React is a JavaScript library for building user interfaces.
2. Features are Virtual DOM, JSX, Unidirectional Data Flow, and Server-Side Rendering. 

### What are the advantages of React?

1. Increases the application's performance with *Virtual DOM*.
2. JSX makes code easy to read and write.
3. It renders both on client and server side
4. Easy to write unit and integration tests with tools such as Jest.

## 2. What is JSX?
1. JSX is a Javascript syntax extension that allows us to write HTML in our JavaScript to create React Elements.
2. Babel compiles JSX into React.createElement() calls

## 3. What is Virtual Dom?
- React makes a virtual representation of the actual DOM in memory because manipulating the actual DOM is expensive in terms of performance. So, the updated virtual DOM is compared with its previous version using React’s ‘diffing’ algorithm to determine how to best update the real DOM when we made changes to the code.

- DOM Manipulation: The real DOM is expensive when it comes to DOM manipulation. The virtual DOM, on the contrary, is inexpensive.
- Element Update: The real DOM creates a new DOM when an element updates. Virtual DOM does not and instead updates the JSX.
- Memory Wastage: The real DOM causes a lot of memory wastage while there is no memory wastage in the case of the virtual DOM.
- Update Speed: The real DOM updates slowly but the virtual DOM updates faster.
- Updating HTML: The real DOM can directly update HTML, while the virtual DOM can’t update HTML directly.

## 4. What is a Component in React and what are the two main ways to define them?
1. Each component is an independent reusable piece of the UI.
2. Class Component: Component implemented using ES6 Classes extending React.Component
3. Function Component: Component implemented by a JS function that takes a props argument and returns a React element

## 5. What are props and state in React?
1. props is the JavaScript object, passed into a Component, that holds the configuration properties
2. props is immutable by the receiving Component
3. state is the JavaScript object, managed within the Component, that holds its internal state.

### The differnece between state and props
The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.
<img width="1156" alt="Screen Shot 2022-08-06 at 16 15 54" src="https://user-images.githubusercontent.com/37787994/183268737-1395cee5-84bf-41d1-a363-a190b16bdc95.png">


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
### Why fragments are better than container divs?

Below are the list of reasons,

1. Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
2. Some CSS mechanisms like *Flexbox* and *CSS Grid* have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
3. The DOM Inspector is less cluttered.


## 7. Walk me through the main phases of the React Lifecycle.
1. **Mounting:** The component is ready to mount in the browser DOM. This phase covers initialization from `constructor()`, `getDerivedStateFromProps()`, `render()`, and `componentDidMount()` lifecycle methods.
2. **Updating:** In this phase, the component gets updated in two ways, sending the new props and updating the state either from `setState()` or `forceUpdate()`. This phase covers `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()` and `componentDidUpdate()` lifecycle methods.
3. **Unmounting:** In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes `componentWillUnmount()` lifecycle method.


- **componentWillMount:** Executed before rendering and is used for App level configuration in your root component.
- **componentDidMount:** Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
- **componentWillReceiveProps:** Executed when particular prop updates to trigger state transitions.
- **shouldComponentUpdate:** Determines if the component will be updated or not. By default it returns `true`. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
- **componentWillUpdate:** Executed before re-rendering the component when there are props & state changes confirmed by `shouldComponentUpdate()` which returns true.
- **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes.
- **componentWillUnmount:** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component. 

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
In React, a controlled component is a form element where the value is determined and updated by the React component state, rather than the DOM. This allows for better control and handling of the form element's behavior.

An uncontrolled component in React is a form element where the value is managed by the DOM and not by the React component state. This can lead to unexpected behavior, such as persistent value even after the form is submitted. So it's generally recommended to use controlled components instead.

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
Children is a prop (this.props.children) that allows us to pass components as data to other components, just like any other prop we use.
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

When we use this.setState in React, it schedules an update to the component's state and re-renders the component. The update is executed asynchronously, meaning that multiple calls to setState in the same cycle are merged into a single update.

Once setState is called, React will compare the current state with the new state and perform a shallow merge of the two states. The component's render method is then called, which generates a virtual DOM representation of the updated component. React then uses a diffing algorithm to determine the minimum number of DOM operations required to update the actual DOM to match the virtual DOM. This allows React to efficiently update the component's view in the browser.

## 17. What is the useEffect hook
- The useEffect Hook allows us to perform side effects in our components.
- useEffect is triggered after a render.
- useEffect is like the combination of componentDidMount, componentDidUpdate and componentWillUnmount.
- useEffect accepts two arguments. The first one is function to be called and the second argument is optional, but it is an array for React to check for changes in order to render.

## 18. What is the useReducer hook
-	useReducer is an alternative to useState that is used when there is complex state logic that that involves multiple sub-values or when the next state depends on the previous one.
-	3 Arguments: Reducer function, initial State Object, and a function to initialize the state.
-	Reducer function takes the current state and action variable and returns the next state.
-	Returns: a pair containing the current state, and a dispatch function for dispatching an action.
-	Works similarly to Redux.

## 19. What is Redux?
1. Redux is a library for managing application state.
2. Redux is a solution for global state management, allowing us to pass data without the need to pass props through every level (aka props drilling)


## 20. What are main parts of Redux?
1. A **store** that holds the state of the application
2. An **action** that describes the changes in the state of the application
3. A **reducer** which actually carries out the state transition depending on the action

### Actions
- Actions are plain Javascript objects with type property to indicate what type of action is being performed.
- Actions are dispatched to the central store using store.dispatch()
- Actions are usually created by Action Creator functions, which given some input generates the corresponding action.

### Reducers
- Reducers are functions that take an Action and a current state and returns the resulting state.
- Reducers must be pure functions and have no side effects.

### Store
- The Store is the central object that maintains and updates the application state.
- The Store also handles the registration and unregistering of listeners.

## 21. How does Redux work?
- First: an Action is dispatched to the store via store.dispatch(action)
- Second: Redux determine the resultant state by calling a Reducer function.
- Third: The root reducer combines the output of multiple reducers into a single state tree.
- Fourth: The Store saves the new state tree and notifies listeners that are registered

## 22. What are Redux Selectors?
- A Selector is a function that takes in the Redux store state and returns the derived data from that state.
- Selectors allow the Redux store state to be as minimal as possible by computing data off of the state

## 23. What is Context API?
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### Context has 3 main parts:
-	A Context object is created using React.createContext(defaultValue)
-	A Provider is a component that triggers all descendant consumers of itself to rerender when there is a change to its value
-	A Consumer is a component that subscribes to context changes

## 24. How do I solve global state management with Hooks?
- By passing the useContext hook a context object, function components can hook onto changes to the nearest corresponding Provider and will rerender when there is an update

## 25. How does Context API compare to Redux and when would you use one over the other?
- Set up for Redux requires more additional work than Context as Context is built into React.
- For most smaller use cases simpler use cases, Context should be sufficient
- Redux allows access to middleware, which triggers a function after an action is dispatched.

## 25. Why do the Component names in JSX start with capital letter?
- This is how React knows to render a Component, and not a HTML Element.

## 26. When will react component re-render?
- React components automatically re-render whenever there is a change in their state or props.

## 27. Difference between Class component and Function component
1. No constructor needed
2. No render() needed
3. Functional component can use React hooks
4. No lifecycle
5. No need to extend from React.component
<img width="1001" alt="Screen Shot 2022-06-09 at 14 49 46" src="https://user-images.githubusercontent.com/37787994/172951209-af85c2c3-94ee-4ffd-9d58-4e1441f12833.png">

## 28. When a React component re-renders?
- A component re-renders whenever it's state updates or whenever it's props changes.

## 29. What is the difference between Element and Component?
- An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components
- Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output.  

## 30. What is the purpose of callback function as an argument of setState()?
The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

Note: It is recommended to use lifecycle method rather than this callback function.
```js
setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))
```

## 31. What is "key" prop and what is the benefit of using it in arrays of elements?

A `key` is a special string attribute we **should** include when creating arrays of elements. *Key* helps React identify which items have changed, are added, or are removed.


## What is Lifting State Up in React?

When several components need to share the same changing data then it is recommended to *lift the shared state up* to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.


## What are Higher-Order Components?

A *higher-order component* (*HOC*) is a function that takes a component and returns a new component.

We call them **pure components** because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

## What is reconciliation?

When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the new ]element with the previously rendered one. When they are not equal, React will update the DOM. This process is called *reconciliation*.

