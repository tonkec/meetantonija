# What is the difference between spread and rest operator?

The spread and rest operators in JavaScript both use the same syntax (...), but they serve different purposes depending on the context in which they are used. Here’s a detailed explanation of each. 

#### Spread operator

The spread operator is used to expand or "spread" the elements of an iterable (like an array, string, or object) into individual elements. It is often used to make copies of arrays or objects, combine arrays or objects, or pass an array as arguments to a function.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Spread operator creates a copy of arr1
console.log(arr2); // Output: [1, 2, 3]
```

You can use spread operator to ***copy*** arrays:

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Spread operator creates a copy of arr1
console.log(arr2); // Output: [1, 2, 3]
```

or ***combining*** arrays

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

or copying objects

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // Spread operator creates a copy of obj1
console.log(obj2); // Output: { a: 1, b: 2 }
```

and for passing arguments to a function

```js
function add(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // Output: 6
```

#### Rest operator

The rest operator is used to collect multiple elements and condense them into a single array. It is typically used in function parameters to handle an indefinite number of arguments or to capture remaining elements in array/object destructuring.

It can be used as a function parameter.

```js
function sum(...numbers) { // The rest operator gathers all arguments into an array
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

or in array destructuring

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

or even in object desctructuring 

```js
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: { c: 3, d: 4 }
```

#### Conclusion
Spread Operator (...): Expands elements of an iterable (e.g., array, object) into individual elements. It’s used to copy, combine, or spread out elements. 

Rest Operator (...): Condenses multiple elements into a single array or object. It’s used in function arguments to gather all remaining arguments, or in destructuring to gather remaining elements.