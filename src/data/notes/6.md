# When to use useState and useRef in React?

If you are coming from the React world, you have probably seen a lot of useState and useRef. You might be thinking when to use what? Here is what I understood from React's documentation. React application rerenders in some cases and one of those cases is when the state changes, that is the value of the useState.

```javascript
const SetStateExample = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <span> {count} </span>
      <button onClick={() => setCount(count + 1)}> Increase count </button>
    </>
  )
}
```

That is a pretty basic example which we all have seen. When we click on the button, the count increases by 1. The important thing to note is that the whole component rerenders (and if any its children components as well) when the state changes, in other words, when we increase the value by 1. Now let's look at the example with useRef.

```javascript
const UseRefExample = () => {
  const countRef = useRef(0)
  return (
    <>
      <span>{countRef.current}</span>
      <button
        onClick={() => {
          countRef.current = countRef.current + 1
        }}
      >
        Increase count
      </button>
    </>
  )
}
```

Whenever we click the button and increase the counter by 1, the component will NOT rerender and the value of the count variable will always be 1.

The useRef is usually used when manipulating the DOM. You have probably seen something like this:

```javascript
const DOMManiuplation = () => {
  const elementRef = useRef(null)

  return (
    <>
      <div ref={elementRef}> Div element </div>
      <button
        onClick={() => {
          elementRef.current.style.backgroundColor = 'orange'
        }}
      >
        Change bg color
      </button>
    </>
  )
}
```

When the button is clicked, we change the background color of the div to orange. The useRef hook provides a reference to the DOM element. The value of the useRef stays always the same.

The whole code can be seen in this [sandbox](https://codesandbox.io/p/sandbox/usestate-vs-useref-gzwdnf?file=%2Fsrc%2FApp.js%3A35%2C23)
