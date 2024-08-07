# How to fetch data in React?

There are zillion ways to fetch the data, but I am going to stick to the basics. I hope you are familiar with hooks in React, because without them, we can't do much. For these little examples we are going to use [fake api](https://jsonplaceholder.typicode.com/). This is our main endpoint. It returns plenty of todos.

```
https://jsonplaceholder.typicode.com/todos
```

Let's render them in the components Todos

```jsx
import { useState, useEffect } from 'react'
const Todos = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // fetch data here
  }, [])

  return (
    <>
      {data.length > 0 ? (
        data.map((d) => <div key={d.id}>{d.title}</div>)
      ) : (
        <h1>No posts</h1>
      )}
    </>
  )
}

export default Todos
```

We set up the stage with that piece of code. Now to the fetching we go! You obviously know that fetching data is asychronous task which means we are dealing with promises. useEffect hook does not allow async function which means we can't write this:

```jsx
useEffect(async () => {
  // fetch here
})
```

We would get an error saying something like this
![Error](https://i.ibb.co/B44ffqd/YFRR5.png)

That is why I am going to define another function which is going to be an async function and place it in the useEffect hook.

```javascript
useEffect(() => {
  async fetchData = () => {
    // fetch data here
  }

  fetchData();
}, [])
```

The next step is to either use async/await or then/catch to get the actual data. Let me show you both ways:

```jsx
useEffect(() => {
  const fetchData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    response = await response.json()
    setData(response)
  }

  fetchData()
}, [])
```

```jsx
useEffect(() => {
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setData(json)
      })
      .catch((e) => console.error(e.message))
  }

  fetchData()
}, [])
```

Now that we have data set we can just loop through it and render it successfully:

```jsx
return data.length > 0 && data.map((d) => <div>{d.title}</div>)
```

The whole component looks like this now (typescript added):

```typescript
import { useState, useEffect } from 'react';

interface Todo {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
}

const Todo = () => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const jsonResponse = await response.json();
      setData(jsonResponse);
    };

    fetchData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((d) => <div key={d.id}>{d.title}</div>)
      ) : (
        <h1>No posts</h1>
      )}
    </>
  );
};

export default Todo;

```
