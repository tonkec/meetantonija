# Understanding Cleanup Function

React’s `useEffect` hook is a powerful tool for handling side effects in your components. But equally important—and sometimes overlooked—is the **cleanup function**. Understanding how and when it runs can help you avoid memory leaks, redundant calls, and subtle bugs.

## What Is a Cleanup Function?

A **cleanup function** is simply a function you return from within `useEffect`. React calls this function **before the effect runs again** or **when the component unmounts**. You can think of it as a way to “tear down” or reset any side effects you previously set up. Here’s a basic example using an event listener:

```jsx
useEffect(() => {
  const handler = () => console.log('resized')
  window.addEventListener('resize', handler)

  return () => {
    window.removeEventListener('resize', handler)
  }
}, [])
```

When the component mounts, the `resize` event listener is added. When it unmounts, the cleanup function removes the listener to avoid memory leaks.

#### When Does a Cleanup Function Run?

There are three key scenarios where the cleanup function runs:

##### 1. When the component unmounts

If you return a function inside `useEffect`, React calls that function when the component is removed from the DOM. This is perfect for clearing intervals, closing sockets, or removing global event listeners.

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Tick')
  }, 1000)

  return () => {
    clearInterval(interval)
  }
}, [])
```

This ensures the timer is cleared when the component goes away.

##### 2. Before the effect re-runs (due to dependency changes)

If your effect depends on a value, React runs the cleanup from the previous effect before running a new one.

```jsx
useEffect(() => {
  console.log('Setting up for', id)

  return () => {
    console.log('Cleaning up from', id)
  }
}, [id])
```

If `id` changes from `1` to `2`, you’ll see this in the console:

```
Setting up for 1
Cleaning up from 1
Setting up for 2
```

##### 3. Immediately in Strict Mode (development only)

In React 18+, Strict Mode intentionally calls the cleanup function after the first run, then re-runs the effect. This helps catch bugs in setup/teardown logic early.

```jsx
useEffect(() => {
  console.log('Effect')

  return () => {
    console.log('Cleanup')
  }
}, [])
```

In development mode with Strict Mode on, the console will show:

```
Effect
Cleanup
Effect
```

This does not happen in production — it's purely for development safety.

#### Why Are Cleanup Functions Important?

Cleanup functions prevent:

- Memory leaks
- Duplicate network calls or intervals
- Subtle bugs in event handlers
- Global state pollution

If you’re setting something up (like a subscription, interval, or listener), chances are you should clean it up too.

#### Conclusion

If `useEffect` is the setup, the cleanup function is the teardown. Understanding when and why React calls your cleanup function gives you the confidence to manage resources correctly — especially in larger apps with multiple side effects. So next time you write an effect, ask yourself: _Do I need to clean this up when the component goes away or changes?_ If the answer is yes, you know what to do.
