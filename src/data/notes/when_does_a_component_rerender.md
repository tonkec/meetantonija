# When does a React domponent re-render?

Understanding when a React component re-renders is crucial for writing efficient, bug-free applications — and it's a question that comes up frequently in interviews.

#### React Re-renders When State or Props Change

The most common reason a React component re-renders is because its **state** or **props** change. React components are pure functions of state and props — so whenever those inputs change, the component re-renders to reflect the new state.

Here's a basic example using `useState`:

```jsx
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
```

Each time the user clicks the button, `setCount` updates the state. This triggers React to re-run the `Counter` component function and update the DOM with the new count value. Props can also trigger a re-render. If a parent component passes different props down to a child, the child will re-render with the new values:

```jsx
function Parent() {
  const [name, setName] = useState('Antonija')

  return <Child name={name} />
}

function Child({ name }) {
  console.log('Child rendered')
  return <div>Hello, {name}</div>
}
```

Every time `setName` is called in the parent, the child receives new props and re-renders.

#### Re-rendering Due to Context

If a component uses a React context (via `useContext`), it will re-render whenever the context value changes — even if its own props and state haven't changed.

```jsx
const ThemeContext = React.createContext('light')

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
      <ThemedComponent />
    </ThemeContext.Provider>
  )
}

function ThemedComponent() {
  const theme = useContext(ThemeContext)
  return <div className={theme}>I'm themed!</div>
}
```

When `theme` changes, `ThemedComponent` re-renders because the context it consumes has changed.

#### Re-renders from Parent Components

Even if a component's state and props haven't changed, it can still re-render if its **parent re-renders**. This is because React walks the tree from the top down during reconciliation. Unless you're using `React.memo`, the child components are also evaluated again.

```jsx
function Parent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <Child />
    </>
  )
}

function Child() {
  console.log('Child rendered')
  return <div>Child component</div>
}
```

Even though `Child` doesn't depend on `count`, it re-renders every time the `Parent` re-renders — unless you optimize it.

#### When State Updates to the Same Value

React does a shallow comparison of state. If you call a setter with the same value as before, React **does not** trigger a re-render.

```jsx
const [count, setCount] = useState(0)
setCount(0) // This will not cause a re-render
```

However, for reference types like objects or arrays, re-rendering may still happen unless you maintain object identity carefully.

```jsx
const [data, setData] = useState({ value: 1 })
setData({ value: 1 }) // This will trigger a re-render because it's a new object
```

#### Conclusion

A component re-renders when its **state**, **props**, or **context** change, or when its **parent re-renders**. Understanding this helps you prevent unnecessary renders, improve performance, and write more predictable React components. Use examples like `React.memo`, `useCallback`, and `useMemo` to optimize re-renders when needed — but always start by understanding what causes them in the first place.
