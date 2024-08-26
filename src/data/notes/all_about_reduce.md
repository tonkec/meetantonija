# All about reduce

#### Intro

In this post I am going to try to explain to myself how does `reduce` work exploring each step in the process. The first time I encountered `reduce` method was when I wanted to sum the numbers in an array:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7]
```

Instead of using for loop:

```javascript
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

console.log(sum) // 28
```

we can use reduce method. Let's see how would that look like.

```javascript
numbers.reduce((acc, curr) => {
  return (acc += curr)
}, 0)
```

This is much shorter syntax and if you know how reduce works, much more readable.

#### Syntax

```javascript
array.reduce(callback[, initialValue])
```

Parts of reduce function are as follows. The callback function accepts 4 arguments

1. accumulator: The accumulated value returned from the previous iteration (or the initialValue if supplied).
2. currentValue: The current element being processed in the array.
3. currentIndex (optional): The index of the current element being processed.
4. array (optional): The array reduce was called upon.

The other parameter from the syntax above is `initialValue` which is a value to start from. In other words, that is a value to use as a first argument to the first call of the `callback`. Complex wording. But remember our sum function. The `inititalValue` was `0` which means that the sum started from `0`, just like in our `for` loop example.

The only argument I have never used nor have I seen it being used is `currentIndex`.

#### Say goodbye to map method

Did you know that you can implement your own `map` method using reduce? This really blowed my mind. Let's go back to our `numbers` array. What if we want to multiply each element by `2`?

```javascript
numbers.map((n) => n * 2) // [2, 4, 6, 8, 10, 12, 14]
```

But how can we do it with `reduce`?

```javascript
numbers.reduce((acc, curr) => {
  acc.push(curr * 2)
  return acc
}, [])
```

#### Flattening arrays

Suppose we have this array `const nestedArray = [[1, 2], [3, 4], [5, 6]];`

```javascript
const flatArray = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue)
}, [])
```

##### Iteration 1:

1. Accumulator: [] (This is the initial value you provided).
2. Current Value: [1, 2] (The first sub-array).
3. Operation: Concatenate [] with [1, 2], resulting in [1, 2].
4. Updated Accumulator: [1, 2].

##### Iteration 2

1. Accumulator: [1, 2] (Result from the previous iteration).
2. Current Value: [3, 4] (The second sub-array).
3. Operation: Concatenate [1, 2] with [3, 4] resulting in [1, 2, 3, 4].
4. Updated Accumulator: [1, 2, 3, 4].

##### Iteration 3:

1. Accumulator: [1, 2, 3, 4] (Result from the previous iteration).
2. Current Value: [5, 6] (The third sub-array).
3. Operation: Concatenate [1, 2, 3, 4] with [5, 6], resulting in [1, 2, 3, 4, 5, 6].

#### Grouping Objects by a Property

```javascript
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 },
]
```

```javascript
const groupedProjects = projects.reduce((accumulator, project) => {
  const year = project.year

  // If the accumulator doesn't have an array for this year, create one
  if (!accumulator[year]) {
    accumulator[year] = []
  }

  // Add the current project to the array for its year
  accumulator[year].push(project)

  // Return the accumulator for the next iteration
  return accumulator
}, {}) // The initial value of the accumulator is an empty object
```

Let's break this down into smaller steps.

##### Initial Value:

We start with an empty object {} as the initial value for our accumulator.

##### Iteration:

1. For each project in the projects array, we check if the accumulator object already has a key that matches the year of the project.
2. If the key (year) does not exist, we create a new array for that year: accumulator[year] = [].
3. We then push the current project into the array for that year: accumulator[year].push(project).

##### Returning the Accumulator:

The reduce function always returns the updated accumulator after each iteration. This ensures that the next iteration has the latest version of the accumulator to work with.

##### Final Output:

After all iterations, the accumulator contains all the projects grouped by their start year.

#### Counting Occurrences of Values

Let's see how is our fruit looking in terms of occurrences.

```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
```

Here is the solution

```javascript
const colorCounts = fruits.reduce((accumulator, fruit) => {
  // If the fruit already exists in the accumulator, increment its count
  if (accumulator[fruit]) {
    accumulator[fruit]++
  }
  // If the fruit doesn't exist in the accumulator, set its count to 1
  else {
    accumulator[fruit] = 1
  }

  // Return the accumulator for the next iteration
  return accumulator
}, {}) // The initial value of the accumulator is an empty object
```

##### Initial Value:

We start with an empty object {} as the initial value for our accumulator.

##### Iteration:

1. For each color in the colors array, we check if the accumulator object already has a key that matches the color.
2. If the color already exists in the accumulator, it means we've encountered this color before, so we increment its count by 1: accumulator[color]++.
3. If the color does not exist in the accumulator, we add it as a key with an initial count of 1: accumulator[color] = 1.

##### Returning the Accumulator:

The reduce function always returns the updated accumulator after each iteration. This ensures that the next iteration has the latest version of the accumulator to work with.

##### Final Output:

After all iterations, the accumulator will contain the count of each color in the colors array.

#### Conclusion

The reduce method is a versatile tool in JavaScript that allows you to iterate over an array and accumulate a result. While it may take some time to master, understanding reduce opens up many possibilities for processing data in a functional style, making your code more expressive and often more concise. However, it's crucial to use it judiciously to maintain code readability and performance.
