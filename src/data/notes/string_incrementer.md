# String incrementer

Recently I started playing on Code wars because I want to improve as a developer and really show off my skills. Here is an interesting kata I stumbled upon. It is considered easy level, but it took me some time to get it right. You can find the kata [here](https://www.codewars.com/kata/54a91a4883a7de5d7800009c).

#### Kata description

> Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number, the number 1 should be appended to the new string.

#### Examples

1. `foo` -> `foo1`
2. `foobar23` -> `foobar24`
3. `foo0042` -> `foo0043`

#### First things first

I want to check for numbers in the string using regex:

```javascript
const arr = string.match(/\d/g)
```

This will match all the digits in the string. This little `g` stands for global which means that the whole string should be searched for numbers. After this, I want to have a remaning text, everything from string but the number.

```javascript
const index = string.indexOf(arrayOfNumbers)
const text = string.substring(0, index)
```

Now I have the remaining text. I want to get the last character so I can turn it into the number and increment it by 1 as stated in the task.

```javascript
const lastCharacter = string.substring(string.length - 1)
```

After that I can just add `+1` to the `lastCharacter`, like this:

```javascript
return `${text}${Number(arrayOfNumbers) + 1}`
```

#### The tricky part

Now comes the tricky part. I want to check how many zeroes is there in the string. This is needed because the input might look like this `foo0042` and the return value should be then `foo0043`, not just `foo43` as you might expected. I need to take into calculation the preceeding zeroes.

```javascript
const zeroes = arr.filter((number) => Number(number) === 0)
```

Ok, and now to add it to the previous part, I am going to interpolate `zeroes` into the final string

```javascript
return `${text}${zeroes.join('')}${Number(arrayOfNumbers) + 1}`
```

But what if the string ends with `0`? For example `foo00`, then it should return `foo01`. Our current code will return `foo001`. That means that we need to remove one `0` from the `zeroes` array:

```javascript
if (Number(lastCharacter) === 0) {
  zeroes.pop()
  return `${text}${zeroes.join('')}${Number(arrayOfNumbers) + 1}`
}
```

The next thing we need to check is if the `lastCharacter` is number `9`. If it is and there are preceeding zeroes, then again we need to remove one `0`. If there are no zeroes, but the last character is `9`, like `foo9` then I am just going to increase the number by `1`.

```javascript
if (Number(lastCharacter) === 9) {
  zeroes.length > 0 ? zeroes.pop() : zeroes
  return `${text}${zeroes.join('')}${Number(arrayOfNumbers) + 1}`
}
```

#### Putting it all together

My final solution looks like this.

```javascript
const arr = string.match(/\d/g)
const arrayOfNumbers = arr.join('')
const zeroes = arr.filter((number) => Number(number) === 0)
const index = string.indexOf(arrayOfNumbers)
const text = string.substring(0, index)
const lastCharacter = string.substring(string.length - 1)

if (Number(lastCharacter) === 0) {
  zeroes.pop()
  return `${text}${zeroes.join('')}${Number(arrayOfNumbers) + 1}`
}

if (Number(lastCharacter) === 9) {
  zeroes.length > 0 ? zeroes.pop() : zeroes
  return `${text}${zeroes.join('')}${Number(arrayOfNumbers) + 1}`
}

return `${text}${zeroes.join('')}${Number(arrayOfNumbers) + 1}`
```

And after submission and all of these checks with ifs and elses, I of course saw an elegant solution someone else posted:

```javascript
return strng.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1))
```

The interesting part here is `+e`, I believe. This is actually a cool way to turn a string into a number

```javascript
const myString = '2'
const myNumber = +myString
console.log(typeof myNumber)
// number
```

Wish me luck with solving other challenges. You can see my whole profile here [codewars/users/antonija](https://www.codewars.com/users/antonija/).
