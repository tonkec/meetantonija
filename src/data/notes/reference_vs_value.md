# Reference vs. Value

Understanding the difference between **value** and **reference** in JavaScript is crucial for writing bug-free code — especially in React, where component re-renders rely heavily on this distinction.

#### Value Types

JavaScript stores **primitive types** (like numbers, strings, booleans, `null`, and `undefined`) by **value**. When you assign one variable to another, it copies the actual value.

```js
let a = 5
let b = a
b = 10

console.log(a) // 5
console.log(b) // 10
```

Here, `a` and `b` are completely independent. Changing one doesn’t affect the other.

#### Reference Types

Non-primitive types — like **objects**, **arrays**, and **functions** — are stored by **reference**. This means the variable doesn’t hold the actual object, but a pointer (reference) to it in memory.

```js
const obj1 = { name: 'Antonija' }
const obj2 = obj1

obj2.name = 'Changed'
console.log(obj1.name) // 'Changed'
```

In this case, `obj1` and `obj2` both point to the **same object** in memory. Mutating one mutates the other.

#### How This Affects React

React relies on **shallow comparison** to determine when to re-render a component. It checks whether state or props have changed by comparing references.

If the reference is the same, React assumes nothing has changed — even if you mutated the contents.

###### ❌ Mutating State (Wrong)

```js
const [user, setUser] = useState({ name: 'Antonija' })
user.name = 'Updated'
setUser(user) // React might not re-render!
```

Here, the `user` object is the same reference before and after `setUser`, so React skips the re-render.

###### ✅ Immutable Update (Correct)

```js
setUser((prev) => ({
  ...prev,
  name: 'Updated',
}))
```

This creates a **new object** with a **new reference**, so React re-renders the component.

#### Reference Equality

In JavaScript:

```js
{} === {} // false (two different references)
[] === [] // false
const obj = {}
obj === obj // true (same reference)
```

This shows how even identical-looking objects are different unless they refer to the same memory location.

#### Why Immutability Matters

When working with React:

- Always **create new objects or arrays** when updating state
- Avoid **mutating state directly**
- Understand that React’s rendering is driven by **reference changes**, not deep comparisons

#### Final Thoughts

The difference between value and reference explains many strange bugs in JavaScript and React. Whenever you're managing objects, arrays, or functions, remember: if you change the original without creating a new one, you're working with a reference — and that can lead to unexpected results. In React, always update state **immutably** to ensure React sees the change and re-renders your component accordingly.
