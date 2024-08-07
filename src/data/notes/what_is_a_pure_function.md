# What is a pure function?

A pure function is a function that returns the same result when same arguments are passed. Such function only relies on its parameters, it does not manipulate or change anything outside of its body.

```javascript
const sum = (a, b) => a + b
```

This is a pure function. When we pass two arguments, the result always stay the same. The result will never change. If we pass 2 and 3 as arguments, result will always be 5, no matter what. Notice that there are not any side effects in this pure function. Nothing happens outside of its body. No state has changed.

```javascript
let counter = 0
const increment = () => counter++
increment()
```

When we call the increment() function, its result actually depends on the state of the variable counter that is outside of the function body. Something else can change the state, some other function and then the result of calling increment function will not be the same. Also, did you know that this function is also impure?

```javascript
function getRandomNumber() {
  return Math.floor(Math.random() * 4)
}
```

The result is never the same! It does not depend on any outside parameters, but still the result is random. Pure functions are a huge part of functional programming. They have many great advantages. They are much easier to test (since you don't have any dependencies, it can be tied well with unit testing), they are easier to maintain (they are usually smaller chunks of code which are easier to scale), they can be composed together, meaning we can call pure function inside pure function and still that composition will be pure as well. Beautiful, correct?

When I learned all of this, I asked myself why does old redux insists on pure functions, more precisely, why do reducers have to be pure? Well, redux compares the new state to the old state. If we directly mutate the old state, then the new and old state will point to the same object. Comparing new state to the old state will result in equality, of course. Redux will not know what has changed. Here comes the but. Did you know that new [redux toolkit](https://redux-toolkit.js.org/) uses [immer](https://immerjs.github.io/immer/) that enables you to write immutable code in muttable syntax? You are writing code as if you are changing the state directly, hence mutating, but under the hood it still stays immutable.
