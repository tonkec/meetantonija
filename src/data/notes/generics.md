# Understanding Generics in TypeScript

If you're serious about writing scalable, type-safe code in TypeScript, **generics** are something you can't ignore. They can look a bit intimidating at first, but once you understand them, they become a superpower in your toolbox.

#### What Are Generics?

Generics are a way to write functions, types, or classes that work with **any data type**, while still keeping strong type safety. Instead of using a specific type like `string` or `number`, you use a **type variable** — like `T` — which gets replaced when the function is used.

###### Basic Example

```ts
function identity<T>(value: T): T {
  return value
}
```

Here, `T` is a generic type. When you call the function, TypeScript infers or lets you specify the type:

```ts
const num = identity<number>(42) // T = number
const str = identity('hello') // T = string (inferred)
```

#### Why Use Generics?

Generics let you:

- Reuse logic without sacrificing type safety
- Avoid `any`, which disables type checking
- Write flexible, readable, predictable APIs

#### Generics with Arrays

You can make functions work with arrays of any type:

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0]
}

const firstNum = getFirst([1, 2, 3]) // number
const firstStr = getFirst(['a', 'b', 'c']) // string
```

#### Generics in Interfaces and Types

You can use generics in custom types too:

```ts
interface Box<T> {
  value: T
}

const numberBox: Box<number> = { value: 123 }
const stringBox: Box<string> = { value: 'hello' }
```

This lets you build reusable structures that can adapt to any type while keeping strong typing.

#### Generic Constraints

You can constrain generic types using `extends`:

```ts
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length)
}

logLength('hello') // OK
logLength([1, 2, 3]) // OK
logLength(42) // Error: number doesn’t have a .length
```

#### Default Generic Values

You can provide default types for generics:

```ts
interface ApiResponse<T = any> {
  data: T
  status: number
}
```

Now if the caller doesn’t specify a type, `T` defaults to `any`.

#### Generics with Multiple Parameters

You can use more than one type parameter:

```ts
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b]
}

const p = pair('hello', 42) // [string, number]
```

#### Conclusion

Generics are one of TypeScript's most powerful features. They make your code more flexible and reusable — **without sacrificing type safety**. Start by using them in utility functions and interfaces. Over time, you'll find they help you express complex logic with clear, maintainable types.
