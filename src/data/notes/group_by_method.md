# Have you heard about groupBy method?

I used loadash many times for this kind of grouping. It looks like Javascript introduced this method in March, 2024. Let's look how it works

I want to group this array by year.

```js
const languages = [
    { title: "Project 1 title", year: 2018 },
    { title: "Project 2 title", year: 2021},
    { title: "Project 3 title", year: 2018 },
    { title: "Project 4 title", year: 2021 },
    { title: "Project 5 title", year: 2020 },
]
```
 
Instead of using `reduce` and `Object.values` methods

```js
const sortedLanguages = Object.values(
  languages.reduce((acc, language) => {
    if (!acc[language.year]) {
      acc[language.year] = [];
    }
    acc[language.year].push(language);
    return acc;
  }, {})
)
```

we can simply use `groupBy` method likewise:

```js
Object.groupBy(languages, ({ year }) => year);
```

Amazing! Right?