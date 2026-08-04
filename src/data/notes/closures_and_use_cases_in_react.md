# Closures and use cases in React

#### What is a closure?

A **closure** is a function that remembers the variables from the scope where it was created — even after that outer function has finished running.

```javascript
function createGreeter(name) {
  const greeting = `Hello, ${name}`

  return function () {
    console.log(greeting)
  }
}

const greetAntonija = createGreeter('Antonija')
greetAntonija()
// Hello, Antonija
```

`createGreeter` has already returned. `greeting` should be gone. It is not — because the inner function closed over it. That remembered environment is the closure.

#### Where you already use closures in React

##### Event handlers

Every handler that reads a value from its component scope is a closure:

```jsx
function SearchBox() {
  const [query, setQuery] = useState('')

  function handleChange(event) {
    // closes over setQuery from the render scope
    setQuery(event.target.value)
  }

  return <input value={query} onChange={handleChange} />
}
```

##### Callbacks that "remember" props or state

```jsx
function UserCard({ userId }) {
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then(console.log)
  }, [userId])
}
```

The effect callback closes over `userId`. That is also why stale closures happen: if a callback keeps an old value after a re-render, it is still closing over the previous render's scope.

##### Debounce and throttle

The timer lives inside a closure so each call shares the same `timeoutId`:

```javascript
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

Without a closure, there would be nowhere private and persistent to keep that timer.

##### Private state with the module / factory pattern

Closures give you real privacy — no class fields required:

```javascript
function createCounter() {
  let count = 0

  return {
    increment() {
      count += 1
      return count
    },
    decrement() {
      count -= 1
      return count
    },
    getCount() {
      return count
    },
  }
}

const counter = createCounter()
counter.increment() // 1
counter.increment() // 2
console.log(counter.count) // undefined — count is private
```

`count` cannot be reached from outside. Only the returned methods can touch it, because they closed over it.

#### Why interviewers ask about closures

Closures reveal whether you understand JavaScript's **scope** and **memory** model — or whether you have mostly memorized framework APIs.

Hooks, event handlers, custom hooks, and memoized callbacks all lean on this idea. If you cannot explain closures, stale state bugs and "why does this callback see the old value?" moments stay mysterious forever.

#### The classic gotcha

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
// 3, 3, 3
```

All three callbacks close over the **same** `i`. By the time they run, the loop is done and `i` is `3`.

Closures capture **variables**, not snapshots of values. That is why `let` fixes it — each iteration gets its own block-scoped binding:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
// 0, 1, 2
```

#### A 30-second challenge

Write a counter that returns `increment` and `decrement`, with a truly private `count` variable. No classes. No `this`. Just a closure.

If you can do it quickly, your fundamentals are in good shape. If not, start there before the next framework release note.

Framework syntax changes every year. Closures do not. Master the fundamentals and you will adapt to anything.
