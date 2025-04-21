# Throttle and debounce

When you're building fast, interactive interfaces, performance matters. And two of the most common techniques to control performance-heavy functions are **throttle** and **debounce**. Though they’re often mentioned together, they solve different problems — and understanding the difference helps you avoid laggy UIs and wasted CPU cycles.

#### What Is Debounce?

**Debounce** delays the execution of a function until after a certain amount of time has passed **since the last time it was called**. It's great for situations where you want to wait until the user has stopped doing something before you respond.

###### Example: Search Input

```js
function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
```

###### Usage:

```js
const handleInput = debounce((e) => {
  console.log('Searching for:', e.target.value)
}, 300)

<input onInput={handleInput} />
```

Here, the search function only fires **after the user stops typing** for 300ms.

#### What Is Throttle?

**Throttle** ensures that a function is only called **once every X milliseconds**, no matter how many times the event fires. It’s perfect for events that happen continuously — like scrolling or resizing — where you want to limit how often a function runs.

###### Example: Scroll Tracking

```js
function throttle(func, delay) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func.apply(this, args)
    }
  }
}
```

###### Usage:

```js
const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY)
}, 200)

window.addEventListener('scroll', handleScroll)
```

Now the scroll handler runs at most once every 200ms.

#### When to Use Each

- Use **debounce** when:

  - You only care about the final action
  - Example: autocomplete, resize, search inputs

- Use **throttle** when:
  - You want to run a function at regular intervals during continuous activity
  - Example: scroll events, mouse movements, FPS limiting

#### Conclusion

Both debounce and throttle are essential for performance optimization in front-end development. They help you reduce the number of expensive operations like reflows, API calls, and DOM manipulations.

Remember:

- **Debounce** waits for the silence
- **Throttle** paces the noise

Mastering these patterns will make your apps feel faster and more responsive — and they’ll absolutely make you look good in interviews.
