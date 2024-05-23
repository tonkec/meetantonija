# What is a lexical scope?

Of course I know what lexical means, this is one of the rare cases where my diploma in linguistics helps me 💪. But still it was confusing to apply that knowledge to Javascript. Let's dive in! First things first. Lexical in general means a definition, an explanation, a meaning. It points to the definition part of the object in contrast to the execution.

```javascript
const whoAmI = 'antonija'

const sayMyName = () => {
  return whoAmI
}

sayMyName()
// antonija
```

I hope you know what a global scope is because this variable was defined in the global scope. Lexical scope of the variable whoAmI is the global scope. It was executed later in the function sayMyName, but it was created in the global scope. Scope of the definition is called lexical scope. Moving on... Does this example look familiar to you?

```javascript
const someFunction = function () {
  const whoAmI = 'antonija'
  const someInnerFunction = function () {
    return whoAmI
  }
}
```

Yes, you are right! This is really similar to the famous, better say notorious, closure. Let's look at something more complex and confusing.

```javascript
const someFunction = function (whoAmI) {
  const greeting = `Hello ${whoAmI}`

  return function () {
    console.log(greeting)
  }
}
```

Calling the someFunction() just returns the inner function, obviously:

```javascript
someFunction("antonija");
ƒ () {
    console.log(greeting);
}
```

But calling it with another set of parenthesis will do the trick because we are calling now the inner function, the closure.

```javascript
someFunction('antonija')()
// Hello Antonija
```

We could have stored in the variable and then call that variable as the function.

```javascript
const callSomeFunction = someFunction('antonija')
callSomeFunction()
// Hello Antonija
```

Do you remember good old days (insert laughing here) in React and how we used to bind functions? I do, I kind of understood why was that needed, but let me take a shot in explaining it, now that I am much wiser and on my quest to become Señor Developer. For this we need objects:

```javascript
const person = {
  name: 'antonija',
  skills: ['javascript', 'typescript', 'css'],
  introduce: function () {
    this.skills.forEach(function (skill) {
      console.log(`${this.name} is well versed in ${skill}`)
    })
  },
}

person.introduce()
// is well versed in javascript
// is well versed in typescript
// is well versed in css
```

What?? But who is well versed in these skills? [object Window] Wait, what? 😆 Now look at this magic (pun intended):

```javascript
const person = {
  name: 'antonija',
  skills: ['javascript', 'typescript', 'css'],
  introduce: function () {
    this.skills.forEach((skill) =>
      console.log(`${this.name} is well versed in ${skill}`)
    )
  },
}

// antonija is well versed in javascript
// antonija is well versed in typescript
// antonija is well versed in css
```

Haha, what the hell happened? Arrow functions use, you guessed it, lexical scope! This keyword in arrow functions refers to its current environment. Fun right? I have to confess something, though. This was also a question in one of the interviews and I was not 💯 sure about the answer. I know a closure when I see one, but you know how it is: you only have couple of seconds to answer, the longer you wait to worse impression you leave. Luckily, I answered it correctly, but of course I could not remember the lexical scope and that is why I wrote this little note.
