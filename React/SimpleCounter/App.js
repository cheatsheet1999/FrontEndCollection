//import { useState } from 'react';
const { useState } = React;

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Click me
      </button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('app'))
