# Re-introduction to sort method.

I have a small trauma when it comes to this little array method in Javascript. I got asked in an interview to sort some array and I could not remember by my heart what does a sort function looks like. I always google it. That is why I decided to write a post about it, mainly to teach myself once and for all, how its syntax looks like. Here is an array with random numbers. If you want to sort it from the smallest number to the biggest number, just use minus operator for two parameters.

```javascript
const array = [1, 12, 4, 67, 2, 33]
array.sort((a, b) => a - b)
// [1, 2, 4, 12, 33, 67]
```

Obviously from the biggest to the smallest number, you would just switch the place of parameters

```javascript
const array = [1, 12, 4, 67, 2, 33]
array.sort((a, b) => b - a)
// [67, 33, 12, 4, 2, 1];
```

Simple as that! Dough! What about the strings? Let's see that too.

```javascript
const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    firstName: 'Alan',
    lastName: 'Doe',
  },
]
```

```javascript
users.sort((a, b) => {
  if (a.firstName < b.firstName) {
    return -1
  }

  if (b.firstName > b.firstName) {
    return 1
  }

  return 0
})
```

```javascript
;[
  {
    firstName: 'Alan',
    lastName: 'Doe',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
  },
]
```

With ES6 this can be achieved with even shorter code:

```javascript
users.sort((a, b) => a.firstname.localeCompare(b.firstname))
```

This is my first post within notes on my website so be gentle when judging it. I hope you enjoyed it and refreshed your memory on the sort method.
