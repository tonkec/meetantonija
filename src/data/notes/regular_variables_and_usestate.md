# State vs Regular Variable in React – What’s the Deal?

Ever wondered why we use `useState` in React instead of just declaring a regular variable? I definitely did when I first had started learning React. Turns out, it’s a core part of how React _reacts_ to changes.

Let me show you the difference with a simple example — a counter. Let’s try building a counter using a regular variable:

```jsx
function CounterWithVar() {
  let count = 0

  const handleClick = () => {
    count += 1
    console.log('Count:', count)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}
```

So… what happens? You click the button, the count does go up in the console — but the UI **never updates**. Why? Because React doesn't know the count changed. Every time a React component renders, it starts fresh. Any variables declared inside the function body are reset! Unless the variable is in state (or stored in a ref), it won’t persist. We need to use `useState` in order to have UI updated.

```jsx
import { useState } from 'react'

function CounterWithState() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}
```

This time, every click updates both the console and the UI. That’s because `useState` triggers a re-render whenever the value changes. You can still use regular variables, but only when they do not need to re-render. Or when they are just temporary or derived values inside the component, for example:

```jsx
function Example() {
  const [input, setInput] = useState('')
  const trimmed = input.trim() // regular variable — fine here

  return <input value={input} onChange={(e) => setInput(e.target.value)} />
}
```
