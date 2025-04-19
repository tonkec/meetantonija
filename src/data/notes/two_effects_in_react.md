# Two effects in React

If you're working with React hooks, you've probably used `useEffect` dozens of times. But what about `useLayoutEffect`? They look almost identical — but under the hood, they behave very differently. Let’s break down what each does, when they run, and when to use which one.

#### The Main Difference

The difference is _when_ they run in the component lifecycle. So `useLayoutEffect` blocks the browser from painting the screen until the effect is done. This means `useLayoutEffect` is **synchronous** while`useEffect` is **asynchronous** (non-blocking). So if you need to **measure layout**, **scroll position**, or **manipulate the DOM before the user sees it**, use `useLayoutEffect`.

Let's measure an element’s height

```jsx
import { useLayoutEffect, useRef } from 'react'

function Box() {
  const boxRef = useRef()

  useLayoutEffect(() => {
    const height = boxRef.current.offsetHeight
    console.log('Measured before paint:', height)
  }, [])

  return <div ref={boxRef}>I am a box</div>
}
```

But be careful, in server-side rendering, `useLayoutEffect` runs only on the **client**. React will warn you if it's used during SSR, though. If you are unsure which to use, use `useEffect`. Reach for `useLayoutEffect` only when you notice visual glitches or need precise control over layout before paint. Both effects run after React renders, but they run at different moments in the rendering lifecycle. The `useLayoutEffect` effect gives you a little time window before the browser visually updates the screen, and that’s super useful for layout-sensitive work.

#### When to use which?

Use `useLayoutEffect` when:

- You need to read or write to the DOM before paint
- You’re dealing with animations or transitions
- You’re trying to prevent layout shifts

Use `useEffect` when:

- Fetching data
- Setting up timers or intervals
- Subscribing to services (e.g., websockets)
- Logging or analytics
- Anything that doesn’t touch the DOM immediately

Here is a oversimplifed api fetch in `useEffect` which is a great use case for that effect.

```jsx
useEffect(() => {
  fetch('/api/data').then(...)
}, [])
```

#### Conclusion

While both effects run after a component renders, the timing difference between them is crucial. Use `useEffect` for tasks that don’t need to block the browser — like data fetching, subscriptions, or logging. Use `useLayoutEffect` when you need to measure or manipulate the DOM before the browser paints, such as fixing layout shifts, scrolling, or handling animations. If you're unsure, start with `useEffect`. Reach for useLayoutEffect only when you notice flickering, jumps, or layout bugs. Understanding when these hooks run helps you write faster, smoother, and more predictable React apps.
