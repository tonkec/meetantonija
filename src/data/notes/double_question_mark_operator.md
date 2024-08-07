# Double questions mark operator

This is actually officially called [Nullish Coalescing Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) and it looks like two question marks: ?? It takes two values and returns value on the right if the value on the left is either null or undefined. Otherwise it returns left value. Let's look at the examples.

```javascript
const something = undefined
const result = something ?? 50
console.log(result)
// 50
```

Since variable something is undefined, the defined value will be returned which in our case is number 50. We can chain it with other ?? operators. Look at this:

```javascript
const firstUser = null
const secondUser = null
const thirdUser = null

console.log(firstUser ?? secondUser ?? thirdUser ?? 'Unknown')
```

The result will be the first defined value. Isn't this beautfiul? The question that raises now is why do we need this nullish operator? Developers used to rely on the or operator || to assign a default value or fallback when the left value is either falsy or false. But let's look at this example:

```javascript
const firstName = ''
const userName = firstName || 'Unknown'
// "Unknown"
```

The result will be 'Unkown' because the || operator treats empty string, 0, undefined and null as false values, actually falsy values. If we want to use 'Unknown' only when the firstName is null, we better use nullish operator.

```javascript
const firstName = ''
const userName = firstName ?? 'Unknown'
// ""
```

```javascript
const firstName = null
const userName = firstName ?? 'Unknown'
// "Unknown"
```
